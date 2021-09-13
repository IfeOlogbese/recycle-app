import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { isNil } from "lodash";
import { connect } from "react-redux";
import {
	ScrollView,
	Box,
	Text,
	Heading,
	Button,
	FormControl,
	Input,
	Stack,
} from "native-base";
import { useForm, Controller } from "react-hook-form";
import ImageUpload from "../../components/ImageUpload";
import { actionRecycleAdd } from "../../appRedux/actions/actionRecycle";

const NewRecycleScreen = (props) => {
	const [image, setImage] = useState(null);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const { navigation, actionRecycleAdd: actionRecycleAddFunc } = props;

	const onSubmit = (data) => {
		console.log(data);
		data.image = image;
		actionRecycleAddFunc(data);
		navigation.navigate("Home");
	};
	console.log(image);

	return (
		<Box bg="#fff" flex={1}>
			<ScrollView>
				<Heading ml={5} my={5} size="xl">
					Add Recycle
				</Heading>

				<FormControl isRequired isInvalid={!isNil(errors.recycleName)}>
					<Stack mx={4}>
						<FormControl.Label>Recycle name</FormControl.Label>
						<Controller
							control={control}
							rules={{
								required: true,
								minLength: 3,
							}}
							render={({ field: { onChange, onBlur, value } }) => (
								<Input
									p={2}
									onBlur={onBlur}
									onChangeText={onChange}
									value={value}
									placeholder="Enter recycle name"
								/>
							)}
							name="recycleName"
							defaultValue=""
						/>

						<FormControl.ErrorMessage>
							Recycle name is required.
						</FormControl.ErrorMessage>
					</Stack>
				</FormControl>

				<FormControl isRequired>
					<Stack mx={4} mt={4}>
						<FormControl.Label>Recycle image</FormControl.Label>
						<ImageUpload receiveImage={setImage} />

						<FormControl.ErrorMessage>
							Recycle image is required.
						</FormControl.ErrorMessage>
					</Stack>
				</FormControl>

				<Button mx={15} my={15} onPress={handleSubmit(onSubmit)}>
					Add
				</Button>
			</ScrollView>
		</Box>
	);
};

const mapDispatchToProps = {
	actionRecycleAdd,
};

export default connect(null, mapDispatchToProps)(NewRecycleScreen);

const styles = StyleSheet.create({});
