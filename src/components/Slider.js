import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";

const Slider = () => {
	return (
		<Swiper style={styles.wrapper} showsButtons={false}>
			<View style={styles.slide1}>
				<Image
					style={styles.image}
					source={{
						uri: "https://bago-public.s3-eu-west-1.amazonaws.com/barber-home.png",
					}}
				/>
				{/* <Text style={styles.text}>Hello Swiper</Text> */}
			</View>
			<View style={styles.slide2}>
				<Image
					style={styles.image}
					source={{
						uri: "https://bago-public.s3-eu-west-1.amazonaws.com/photgrapher-home.png",
					}}
				/>
				{/* <Text style={styles.text}>Beautiful</Text> */}
			</View>
			<View style={styles.slide3}>
				<Image
					style={styles.image}
					source={{
						uri: "https://bago-public.s3-eu-west-1.amazonaws.com/reunion-home.png",
					}}
				/>
				{/* <Text style={styles.text}>And simple</Text> */}
			</View>
		</Swiper>
	);
};

export default Slider;

const styles = StyleSheet.create({
	wrapper: {
		height: 200,
	},
	slide1: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#9DD6EB",
	},
	slide2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#97CAE5",
	},
	slide3: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#92BBD9",
	},
	text: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
	image: {
		height: "100%",
		width: "100%",
		resizeMode: "cover",
	},
});
