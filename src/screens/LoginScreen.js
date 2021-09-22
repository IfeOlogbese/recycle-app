import React from "react";
import { StyleSheet, View } from "react-native";
import {
	Image,
	Icon,
	Button,
	Stack,
	Text,
	VStack,
	ScrollView,
	Box,
	Pressable,
	HStack,
} from "native-base";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { windowHeight } from "../utils/dimensions";
import FormInput from "../components/FormInput";

const LoginScreen = ({ navigation }) => {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Box flex={1}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<VStack style={styles.container} w="100%">
					<Image
						style={styles.logo}
						alt="logo"
						source={require("../../assets/recycle-icon.png")}
					/>
					<Text
						style={styles.text}
						fontFamily="heading"
						fontWeight={200}
						fontStyle="italic"
					>
						Recycle App
					</Text>

					<Stack style={styles.formWrapper} mt={5}>
						<FormInput
							control={control}
							errorField={errors.username}
							required={true}
							rules={{
								required: true,
								minLength: 3,
							}}
							type="email"
							InputLeftElement={
								<Icon
									as={<MaterialIcons name="person" />}
									size={5}
									ml="2"
									color="muted.400"
								/>
							}
							placeholder="Email address"
							name="username"
							errorMessage="Username is required."
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

						<VStack mt={5}>
							<Button style={styles.button} mx={4} size="lg">
								Sign in
							</Button>
						</VStack>
					</Stack>

					{/** Pressable buttons */}

					<Pressable style={styles.textWrapper}>
						<Text
							color="primary.700"
							fontFamily="body"
							fontWeight={200}
							fontSize={17}
						>
							Forgot Password
						</Text>
					</Pressable>

					{/** Social login buttons */}

					<VStack mt={5} style={styles.formWrapper}>
						<Button
							style={styles.button}
							mx={4}
							size="lg"
							bg="#e6eaf4"
							_text={{ color: "#4867aa" }}
							leftIcon={
								<Icon as={AntDesign} name="facebook-square" size="sm" />
							}
						>
							Sign In with Facebook
						</Button>
					</VStack>
					<VStack mt={5} style={styles.formWrapper}>
						<Button
							style={styles.button}
							mx={4}
							size="lg"
							_text={{ color: "#de4d41" }}
							bg="#f5e7ea"
							opacity={1}
							leftIcon={<Icon as={AntDesign} name="google" size="sm" />}
						>
							Sign In with Google
						</Button>
					</VStack>

					<Pressable
						style={styles.textWrapper}
						onPress={() => navigation.navigate("Signup")}
					>
						<Text
							color="primary.700"
							fontFamily="body"
							fontWeight={200}
							fontSize={17}
						>
							Don't have an account? Create one here
						</Text>
					</Pressable>
				</VStack>
			</ScrollView>
		</Box>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: "center",
		paddingTop: windowHeight / 6,
		alignItems: "center",
		marginBottom: 50,
	},
	logo: {
		height: 150,
		width: 150,
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
		marginVertical: 30,
	},
	formWrapper: {
		flexDirection: "column",
		width: "100%",
	},
	input: {
		height: windowHeight / 15,
	},
	button: {
		height: windowHeight / 15,
	},
});
