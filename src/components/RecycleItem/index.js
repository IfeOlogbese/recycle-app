import React from "react";
import { Text, Pressable, HStack, Image, Center } from "native-base";

const RecycleItem = ({ navigation, cycle }) => {
	return (
		<Pressable
			onPress={() => {
				navigation.navigate("Details", {
					id: cycle.id,
				});
			}}
			_pressed={{
				bg: "primary.500",
			}}
			p={4}
			bg="#fff"
			mb={3}
			width="100%"
			rounded="lg"
			shadow={4}
			key={cycle.id}
		>
			{({ isHovered, isFocused, isPressed }) => {
				return (
					<HStack>
						<Image
							source={{
								uri: cycle.image,
							}}
							alt="Alternate Text"
							size="sm"
							borderRadius={8}
						/>
						<Center ml={10}><Text color={isPressed ? "#fff" : "#000"}>{cycle.text}</Text></Center>
					</HStack>
				);
			}}
		</Pressable>
	);
};

export default RecycleItem;
