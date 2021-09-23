import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { ScrollView, Box, Heading } from "native-base";
import RecycleForm from "../../components/RecycleForm";
import { actionRecycleAdd } from "../../appRedux/actions";

const NewRecycleScreen = (props) => {
	const { navigation, actionRecycleAdd: actionRecycleAddFunc } = props;

	const onSubmit = (data, image) => {
		console.log(data);
		data.image = image;
		actionRecycleAddFunc(data);
		navigation.navigate("Home");
	};

	return (
		<Box bg="#fff" flex={1}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Heading ml={5} my={5} size="xl">
					Add Recycle
				</Heading>

				<RecycleForm onSubmit={onSubmit} actionText="Add" />
			</ScrollView>
		</Box>
	);
};

const mapDispatchToProps = {
	actionRecycleAdd,
};

export default connect(null, mapDispatchToProps)(NewRecycleScreen);

const styles = StyleSheet.create({});
