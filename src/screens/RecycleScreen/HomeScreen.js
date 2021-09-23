import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { orderBy } from "lodash";
import { StyleSheet, ScrollView } from "react-native";
import { Box, Heading, VStack, Text } from "native-base";
import RecycleItem from "../../components/RecycleItem";
import {
	Card,
	CardTitleWrapper,
	CardTitle,
	CardDescription,
	CardImage,
} from "../../styles/RecycleItemStyles";

const HomeScreen = (props) => {
	const { navigation, recycles } = props;
	const [expanded, setExpanded] = React.useState(true);

	const handlePress = () => setExpanded(!expanded);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerTitle: "HomeScreen",
		});
	}, [navigation]);

	return (
		<Box flex={1}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Heading ml={5} my={5} size="xl">
					ALL recycles
				</Heading>

				{orderBy(recycles, ["id"], ["desc"]).map((cycle) => (
					<RecycleItem key={cycle.id} navigation={navigation} cycle={cycle} />
				))}
			</ScrollView>
		</Box>
	);
};

const mapStateToProps = ({ reducerRecycle }) => {
	const { recycles } = reducerRecycle;
	return { recycles };
};

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({});
