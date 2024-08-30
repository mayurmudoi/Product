import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home.tsx";

const Stack = createNativeStackNavigator()

const AppStack = () => {
	return (
		<Stack.Navigator
			initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerTitle: "Thumbs Up Soft Drink Bottle",
				}}
			/>
		</Stack.Navigator>
	)
}

export default AppStack;