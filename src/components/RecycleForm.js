import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { isNil } from "lodash";
import { TextArea, Button, FormControl, Input, Stack } from "native-base";
import { useForm, Controller } from "react-hook-form";
import ImageUpload from "./ImageUpload";

const RecycleForm = ({ onSubmit, recycle, actionText }) => {
	const [image, setImage] = useState(null);
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const recycleItem = recycle || {};

	console.log("image", image);

	return (
		<>
			<FormControl isRequired isInvalid={!isNil(errors.text)}>
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
						name="text"
						defaultValue={recycleItem.text}
					/>

					<FormControl.ErrorMessage>
						Recycle name is required.
					</FormControl.ErrorMessage>
				</Stack>
			</FormControl>

			<FormControl isRequired isInvalid={!isNil(errors.description)}>
				<Stack mx={4} mt={4}>
					<FormControl.Label>Recycle description</FormControl.Label>
					<Controller
						control={control}
						rules={{
							required: true,
							minLength: 3,
						}}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextArea
								p={2}
								h={20}
								onBlur={onBlur}
								onChangeText={onChange}
								value={value}
								placeholder="Enter recycle description"
							/>
						)}
						name="description"
						defaultValue={recycleItem.description}
					/>

					<FormControl.ErrorMessage>
						Recycle description is required.
					</FormControl.ErrorMessage>
				</Stack>
			</FormControl>

			<FormControl isRequired={isNil(recycleItem.id)}>
				<Stack mx={4} mt={4}>
					<FormControl.Label>Recycle image</FormControl.Label>
					<ImageUpload receiveImage={setImage} imageUri={recycleItem.image} />

					<FormControl.ErrorMessage>
						Recycle image is required.
					</FormControl.ErrorMessage>
				</Stack>
			</FormControl>

			<Button mx={15} my={15} onPress={handleSubmit((data) => onSubmit(data, image))}>
				{actionText}
			</Button>
		</>
	);
};

export default RecycleForm;

const styles = StyleSheet.create({});
