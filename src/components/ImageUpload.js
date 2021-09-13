import React, { useState, useEffect } from "react";
import { View, Platform } from "react-native";
import { Button, Image, VStack } from "native-base";
import * as ImagePicker from "expo-image-picker";

const ImageUpload = ({ receiveImage, imageUri }) => {
	const [image, setImage] = useState(null);

	useEffect(() => {
		(async () => {
			if (Platform.OS !== "web") {
				const { status } =
					await ImagePicker.requestMediaLibraryPermissionsAsync();
				await ImagePicker.requestCameraPermissionsAsync();
				if (status !== "granted") {
					alert("Sorry, we need camera roll permissions to make this work!");
				}
			}
		})();
	}, []);

	const pickImage = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		console.log(result);

		if (!result.cancelled) {
			setImage(result.uri);
			receiveImage(result.uri);
		}
	};

	const imageSource = image || imageUri;

	return (
		<VStack>
			<Button onPress={pickImage} bg="#fff">
				Select image
			</Button>

			{imageSource && (
				<Image alignSelf="center" alt="RecycleImage" borderRadius={8} source={{ uri: imageSource }} style={{ width: 200, height: 200 }} />
			)}
		</VStack>
	);
};

export default ImageUpload;
