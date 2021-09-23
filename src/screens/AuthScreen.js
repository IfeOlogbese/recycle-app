import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import OnboardingScreen from "./OnboardingScreen";

const Stack = createNativeStackNavigator();

const AuthScreen = ({ children }) => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null);
	let routeName;

	useEffect(() => {
		AsyncStorage.getItem("alreadyLaunched").then((value) => {
			if (value === null) {
				AsyncStorage.setItem("alreadyLaunched", "true");
				setIsFirstLaunch(true);
			} else {
				setIsFirstLaunch(false);
			}
		});
	}, []);

	if (isFirstLaunch === null) {
		return null;
	} else if (isFirstLaunch === true) {
		routeName = "Onboarding";
	} else {
		routeName = "Login";
	}

	return (
		<Stack.Navigator
			initialRouteName={routeName}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Group>
				<Stack.Screen name="Onboarding" component={OnboardingScreen} />
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Signup" component={SignupScreen} />
			</Stack.Group>
		</Stack.Navigator>
	);
};

export default AuthScreen;

const styles = StyleSheet.create({});
