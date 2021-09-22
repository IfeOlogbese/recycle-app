import React from "react";
import { StyleSheet } from "react-native";
import { isNil } from "lodash";
import { FormControl, Input, Stack } from "native-base";
import { Controller } from "react-hook-form";
import { windowHeight } from "../utils/dimensions";

const FormInput = ({
	errorField,
	errorMessage,
	rules,
	control,
	type,
	required,
	placeholder,
	name,
	...rest
}) => {
	let inputProps = {};
	let isRequired = required || false;

	if (type === "email") {
		inputProps = {
			autoCompleteType: "email",
			keyboardType: "email-address",
			textContentType: "emailAddress",
		};
	} else if (type === "password") {
		inputProps = {
			autoCompleteType: "password",
			textContentType: "password",
		};
	}

	return (
		<FormControl mt={5} isRequired={isRequired} isInvalid={!isNil(errorField)}>
			<Stack mx={4}>
				<Controller
					control={control}
					rules={{
						required: true,
						minLength: 3,
					}}
					render={({ field: { onChange, onBlur, value } }) => (
						<Input
							size="lg"
							style={styles.input}
							p={2}
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							{...inputProps}
							{...rest}
							returnKeyType="done"
							placeholder={placeholder}
						/>
					)}
					name={name}
				/>

				<FormControl.ErrorMessage>{errorMessage}</FormControl.ErrorMessage>
			</Stack>
		</FormControl>
	);
};

export default FormInput;

const styles = StyleSheet.create({
	input: {
		height: windowHeight / 15,
	},
});
