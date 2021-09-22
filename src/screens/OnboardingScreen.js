import React from "react";
import { StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const OnboardingScreen = ({ navigation }) => {
	return (
		<Onboarding
			onSkip={() => navigation.replace("Login")}
			onDone={() => navigation.navigate("Login")}
			pages={[
				{
					backgroundColor: "orange",
					image: (
						<Image
							style={styles.image}
							resizeMode="cover"
							source={require("../../assets/recycle-1.jpeg")}
						/>
					),
					title: "Onboarding 1",
					subtitle: "Done with React Native Onboarding Swiper",
				},
				{
					backgroundColor: "#fff",
					image: (
						<Image
							style={styles.image}
							resizeMode="contain"
							source={require("../../assets/recycle-icon.png")}
						/>
					),
					title: "Onboarding 2",
					subtitle: "Done with React Native Onboarding Swiper",
				},
				{
					backgroundColor: "yellow",
					image: (
						<Image
							style={styles.image}
							resizeMode="contain"
							source={require("../../assets/recycle-icon.png")}
						/>
					),
					title: "Onboarding 3",
					subtitle: "Done with React Native Onboarding Swiper",
				},
			]}
		/>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		width: 100,
		height: 100,
	},
});
