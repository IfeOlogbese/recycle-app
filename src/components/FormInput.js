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
	label,
	showLabel,
	type,
	placeholder,
	name,
	...rest
}) => {
	let inputProps = {};
	let inputRules = { required: false, minLength: 3, ...rules };

	if (type === "email") {
		inputProps = {
			type: "email",
			autoCompleteType: "email",
			keyboardType: "email-address",
			textContentType: "emailAddress",
			autoCapitalize: "none",
			clearButtonMode: "while-editing",
		};
	} else if (type === "password") {
		inputProps = {
			autoCompleteType: "password",
			textContentType: "password",
			type: "password",
			autoCapitalize: "none",
			autoCorrect: false,
			clearButtonMode: "while-editing",
		};
	}

	const errorMessageFunc = (error) => {
		if (error?.type === "required") {
			return `${label} is required.`;
		} else if (error?.type === "maxLength") {
			return `${label} cannot exceed ${rules.maxLength} characters`;
		} else if (error?.type === "minLength") {
			return `Minimum ${rules.minLength} characters allowed`;
		} else {
			return errorMessage;
		}
	};

	return (
		<FormControl mt={5} isRequired={inputRules.required} isInvalid={!isNil(errorField)}>
			<Stack mx={4}>
				{showLabel ? <FormControl.Label>{label}</FormControl.Label> : null}
				<Controller
					control={control}
					rules={inputRules}
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

				<FormControl.ErrorMessage>
					{errorMessageFunc(errorField)}
				</FormControl.ErrorMessage>
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
