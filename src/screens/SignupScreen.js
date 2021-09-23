import React from "react";
import { StyleSheet, View } from "react-native";
import {
	Icon,
	Button,
	Stack,
	Text,
	VStack,
	ScrollView,
	Box,
	Pressable,
} from "native-base";
import { connect } from "react-redux";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { windowHeight } from "../utils/dimensions";
import FormInput from "../components/FormInput";
import { thunkAuthSignup } from "../appRedux/actions";

const SignupScreen = ({ navigation, thunkAuthSignup: thunkAuthSignupFunc }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		thunkAuthSignupFunc(data, () => navigation.navigate("HomeTab"));
	};

	return (
		<Box flex={1}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<VStack style={styles.container} w="100%">
					<Text style={styles.text} fontFamily="heading" fontWeight={200}>
						Create an account
					</Text>

					<Stack style={styles.formWrapper} mt={3}>
						<FormInput
							control={control}
							errorField={errors.email}
							required={true}
							rules={{
								required: true,
								minLength: 3,
							}}
							type="email"
							InputLeftElement={
								<Icon
									as={<MaterialIcons name="email" />}
									size={5}
									ml="2"
									color="muted.400"
								/>
							}
							placeholder="Email address"
							name="email"
							errorMessage="Email address is required."
						/>

						<FormInput
							control={control}
							errorField={errors.password}
							required={true}
							rules={{
								required: true,
								minLength: 3,
							}}
							type="password"
							InputRightElement={
								<Icon
									as={<MaterialIcons name="visibility-off" />}
									size={5}
									mr="2"
									color="muted.400"
								/>
							}
							placeholder="Password"
							name="password"
							errorMessage="Password is required."
						/>

						<FormInput
							control={control}
							errorField={errors.firstname}
							required={true}
							rules={{
								required: true,
								minLength: 3,
							}}
							type="text"
							InputLeftElement={
								<Icon
									as={<MaterialIcons name="person" />}
									size={5}
									ml="2"
									color="muted.400"
								/>
							}
							placeholder="First name"
							name="firstname"
							errorMessage="First name is required."
						/>

						<FormInput
							control={control}
							errorField={errors.lastname}
							required={true}
							rules={{
								required: true,
								minLength: 3,
							}}
							type="text"
							InputLeftElement={
								<Icon
									as={<MaterialIcons name="person" />}
									size={5}
									ml="2"
									color="muted.400"
								/>
							}
							placeholder="Surname"
							name="lastname"
							errorMessage="Surname is required."
						/>

						<VStack mt={5}>
							<Button
								style={styles.button}
								mx={4}
								size="lg"
								onPress={handleSubmit((data) => onSubmit(data))}
							>
								Sign up
							</Button>
						</VStack>
					</Stack>

					{/** T&C's */}
					<View style={styles.textPrivate}>
						<Text style={styles.color_textPrivate}>
							By registering, you confirm that you accept our{" "}
						</Text>
						<Pressable onPress={() => alert("Terms Clicked!")}>
							<Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
								Terms of service
							</Text>
						</Pressable>
						<Text style={styles.color_textPrivate}> and </Text>
						<Text style={[styles.color_textPrivate, { color: "#e88832" }]}>
							Privacy Policy
						</Text>
					</View>

					{/** Pressable buttons */}

					<Pressable
						style={styles.textWrapper}
						onPress={() => navigation.navigate("Login")}
					>
						<Text
							color="primary.700"
							fontFamily="body"
							fontWeight={200}
							fontSize={17}
						>
							Have an account? Sign In
						</Text>
					</Pressable>
				</VStack>
			</ScrollView>
		</Box>
	);
};

const mapDispatchToProps = {
	thunkAuthSignup,
};

export default connect(null, mapDispatchToProps)(SignupScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		paddingTop: windowHeight / 6,
		alignItems: "center",
		marginBottom: 50,
	},
	logo: {
		height: 120,
		width: 120,
		resizeMode: "cover",
		marginBottom: 10,
	},
	text: {
		fontSize: 28,
		marginBottom: 10,
		lineHeight: 28,
	},
	textWrapper: {
		textAlign: "center",
		alignSelf: "center",
		marginBottom: 20,
	},
	formWrapper: {
		flexDirection: "column",
		width: "100%",
	},
	button: {
		height: windowHeight / 15,
	},
	textPrivate: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginVertical: 35,
		marginHorizontal: 20,
		justifyContent: "center",
	},
	color_textPrivate: {
		fontSize: 13,
		fontWeight: "400",
		color: "grey",
	},
});
