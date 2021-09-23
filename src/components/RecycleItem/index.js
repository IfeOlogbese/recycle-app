import React from "react";
import { Pressable } from "react-native";
import {
	Card,
	CardTitleWrapper,
	CardTitle,
	CardDescription,
	CardImage,
} from "../../styles/RecycleItemStyles";

const RecycleItem = ({ navigation, cycle }) => {
	return (
		<Pressable
			onPress={() => {
				navigation.navigate("Details", {
					id: cycle.id,
				});
			}}
			key={cycle.id}
		>
			<Card>
				<CardTitleWrapper>
					<CardTitle>{cycle.text}</CardTitle>
					<CardDescription>{cycle.description}</CardDescription>
				</CardTitleWrapper>
				<CardImage
					source={{
						uri: cycle.image,
					}}
				/>
			</Card>
		</Pressable>
	);
};

export default RecycleItem;
