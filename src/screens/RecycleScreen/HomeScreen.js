import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { orderBy } from "lodash";
import { StyleSheet, Alert } from "react-native";
import {
	Box,
	Button,
	Center,
	Heading,
	ScrollView,
	Image,
	VStack,
} from "native-base";
import { DrawerActions } from "@react-navigation/native";
import RecycleItem from "../../components/RecycleItem";

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
			<ScrollView>
				<Heading ml={5} my={5} size="xl">
					ALL recycles
				</Heading>

				<VStack alignItems="center" mx={5}>
					{orderBy(recycles, ["id"], ["desc"]).map((cycle) => (
						<RecycleItem key={cycle.id} navigation={navigation} cycle={cycle} />
					))}
				</VStack>
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
