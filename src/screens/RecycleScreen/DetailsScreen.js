import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DetailsScreen = ({ navigation, route }) => {
	const { text } = route.params;

	return (
		<View>
			<Text>Detail Screen</Text>
			<Text>{text}</Text>
		</View>
	);
};

export default DetailsScreen;

const styles = StyleSheet.create({});
