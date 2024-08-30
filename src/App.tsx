import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './navigation/Navigation.tsx';

const App = () => {
	return (
		<NavigationContainer>
			<AppStack />
		</NavigationContainer>
	);
};

export default App;