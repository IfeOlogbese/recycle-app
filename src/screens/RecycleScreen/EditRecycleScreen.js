import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
	ScrollView,
	Box,
	Heading,
} from "native-base";
import RecycleForm from "../../components/RecycleForm";
import { actionRecycleUpdate } from "../../appRedux/actions/actionRecycle";

const EditRecycleScreen = (props) => {
	const {
		navigation,
		route,
		recycles,
		actionRecycleUpdate: actionRecycleUpdateFunc,
	} = props;
	const { id } = route.params;
	const recycle = recycles.find((cycle) => cycle.id === id);

	const onSubmit = (data, image) => {
		data.image = image || recycle.image;
		data.id = id;
		console.log(data);
		actionRecycleUpdateFunc(data);
		navigation.navigate("Details", { id });
	};

	return (
		<Box bg="#fff" flex={1}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Heading ml={5} my={5} size="xl">
					Edit Recycle
				</Heading>

				<RecycleForm onSubmit={onSubmit} recycle={recycle} actionText="Update" />
			</ScrollView>
		</Box>
	);
};

const mapStateToProps = ({ reducerRecycle }) => {
	const { recycles } = reducerRecycle;
	return { recycles };
};

const mapDispatchToProps = {
	actionRecycleUpdate,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditRecycleScreen);

const styles = StyleSheet.create({});
