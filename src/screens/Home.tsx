import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity} from 'react-native';
import data from '../data/DummyData.json';

const {width: screenWidth} = Dimensions.get('window')

type BulletProps = {
	item: string,
}
const BulletListDescription = ({item}: BulletProps) => {
	return (
		<View style={styles.ul}>
			<View style={styles.li}>
				<Text style={styles.bulletPoint}>•</Text>
				<Text style={styles.liText}>{item}</Text>
			</View>
		</View>
	);
};

type ImageProps = {
	image: any,
}

const ImageContainer = ({image}: ImageProps) => {
	return (
		<View style={styles.imgBody}>
			<Image source={image} style={styles.imgStyle}/>
		</View>
	);
};

const SimilarProdComponent = () => {
	return (
		<View style={styles.similarProdContainer}>
			<TouchableOpacity style={[styles.imgSubContainer, {
				padding: 0,
				alignItems: 'center',
				paddingVertical: 8
			}]}>
				<Image source={require('../../assets/images/img1.png')}
					   style={styles.similarProdImg}/>
			</TouchableOpacity>
			<TouchableOpacity>
				<Text style={{fontSize: 16, color: 'gray'}}>Thumbs Up</Text>
				<Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>Soft Drink
					Bottle</Text>

			</TouchableOpacity>
			<Text style={{fontSize: 16, marginTop: 8}}>750 ml</Text>
			<Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>₹45</Text>
			<View style={styles.optionButtonSimilar}>
				<TouchableOpacity style={styles.button}>
					<Text style={{fontSize: 16, color: 'rgb(27, 166, 114)',}}>3 Options</Text>
					<Image source={require('../../assets/icons/downa.png')}
						   style={{height: 14, width: 14, tintColor: 'rgb(27, 166, 114)'}}/>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const Home = () => {

	const [showFullIngredients, setShowFullIngredients] = useState(false)
	const [showFullDescription, setShowFullDescription] = useState(false)
	const maxShowFullIngredients = 5;

	const toggleShowMore = () => {
		setShowFullIngredients(!showFullIngredients)
	}
	const toggleShowDesc = () => {
		setShowFullDescription(!showFullDescription)
	}

	const description = data.product.importantInformation
	return (
		<View style={styles.container}>
			<View style={styles.bodyContainer}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.imageContainer}>
						<View
							style={styles.imgSubContainer}>
							<ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
								<ImageContainer image={require('../../assets/images/img1.png')}/>
								<ImageContainer image={require('../../assets/images/img2.png')}/>
								<ImageContainer image={require('../../assets/images/img4.png')}/>
							</ScrollView>
						</View>
						<View style={{}}>
							<TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', height: 20, gap: 4}}>
								<Text style={{fontSize: 16, color: '#ff8c07', fontWeight: '500'}}>Thumbs Up</Text>
								<Image source={require('../../assets/icons/righta.png')}
									   style={{height: 14, width: 14, tintColor: '#ff8c07'}}/>
							</TouchableOpacity>
							<Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>Soft Drink Bottle</Text>
							<Text style={{fontSize: 16, marginTop: 8}}>750 ml</Text>
							<Text style={{fontSize: 18, color: 'black', fontWeight: '600'}}>₹45</Text>
						</View>
						<View style={styles.optionButton}>
							<TouchableOpacity style={styles.button}>
								<Text style={{fontSize: 16, color: 'rgb(27, 166, 114)',}}>3 Options</Text>
								<Image source={require('../../assets/icons/downa.png')}
									   style={{height: 14, width: 14, tintColor: 'rgb(27, 166, 114)'}}/>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.body}>
						<Text style={styles.liBullet}>
							Ingredients
						</Text>
						{data.product.ingredients
							.slice(0, showFullIngredients ? data.product.ingredients.length : maxShowFullIngredients)
							.map((ingredient, index) => (
								<BulletListDescription key={index} item={ingredient}/>
							))}
						<TouchableOpacity onPress={toggleShowMore}>
							<Text style={styles.showMoreText}>
								{showFullIngredients ? '- Show Less' : '+ Show More'}
							</Text>
						</TouchableOpacity>
						<View style={{width: '100%', height: 0.4, backgroundColor: 'lightgray'}}/>
						<Text style={styles.liBullet}>
							Description
						</Text>
						<Text style={styles.descriptionText}>
							{data.product.description.text}
						</Text>
						{data.product.description.highlights.map((highlight, index) => (
							<BulletListDescription key={index} item={highlight}/>
						))}
					</View>

					<View style={styles.body}>
						<Text style={styles.liBullet}>
							Similar Products
						</Text>
						<ScrollView horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false}
									style={{paddingHorizontal: 16}}>
							<View style={{marginRight: 32, gap: 16, flexDirection: 'row'}}>
								<SimilarProdComponent/>
								<SimilarProdComponent/>
								<SimilarProdComponent/>
								<SimilarProdComponent/>
							</View>
						</ScrollView>
					</View>
					<View style={[styles.body, {gap: 0}]}>
						<Text style={[styles.liBullet, {marginBottom: 16}]}>
							Seller Details
						</Text>
						{
							data.product.sellerDetails.map((details, index) => (
								<Text key={index}>{details}</Text>
							))
						}
					</View>
					<View style={styles.body}>
						<Text style={styles.liBullet}>
							Important Information
						</Text>
						<Text style={styles.descriptionText}>
							{
								showFullDescription ? description : `${description.split(' ').slice(0, 40).join(' ')}...`
							}
							<TouchableOpacity onPress={toggleShowDesc}>
								<Text style={styles.showMoreText}>
									{showFullDescription ? '- Show Less' : '+ Show More'}
								</Text>
							</TouchableOpacity>
						</Text>
					</View>
				</ScrollView>
			</View>
		</View>
	)
}

export default Home;

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#f0f0f5',
	},
	bodyContainer: {
		paddingHorizontal: 16,
	},
	productImage: {
		height: '80%',
		width: screenWidth - 72
	},
	body: {
		borderRadius: 8,
		backgroundColor: 'white',
		width: '100%',
		padding: 16,
		gap: 16,
		marginVertical: 8
	},
	imageContainer: {
		borderRadius: 8,
		backgroundColor: 'white',
		width: '100%',
		padding: 16,
		gap: 16,
		marginTop: 16,
		marginBottom: 8
	},
	imgBody: {
		alignItems: 'center',
		justifyContent: 'center'
	},
	imgStyle: {
		height: 320,
		width: 296,
	},
	bulletPoint: {
		fontSize: 24,
		lineHeight: 24,
		marginRight: 8,
	},
	imgSubContainer: {
		borderWidth: 0.5,
		borderColor: 'lightgray',
		borderRadius: 8,
		padding: 16,
	},
	ul: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	li: {
		flexDirection: 'row',
	},
	liBullet: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'black'
	},
	liText: {
		fontSize: 14,
		textAlign: "justify",
		color: 'black'
	},
	optionButton: {
		position: 'absolute',
		right: 16,
		bottom: 16,
	},
	button: {
		height: 40,
		width: 100,
		borderRadius: 8,
		borderWidth: 0.8,
		borderColor: 'lightgray',
		elevation: 2,
		backgroundColor: 'white',
		flexDirection: 'row',
		justifyContent:'center',
		alignItems:'center',
		gap:4
	},
	descriptionText: {
		fontSize: 14,
		color: 'black',
		textAlign: 'justify'
	},
	showMoreText: {
		fontSize: 14,
		color: '#ff8c07',
		fontWeight: 'bold',
		marginTop: 8,
	},
	similarProdContainer: {
		height: 224,
		width: 142
	},
	similarProdImg: {
		height: 120,
		width: 90
	},
	optionButtonSimilar: {
		position: 'absolute',
		right: 0,
		bottom: 4
	}
})