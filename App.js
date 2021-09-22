import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeBaseProvider, extendTheme } from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import store from "./src/appRedux/store";
import RecycleScreen from "./src/screens/RecycleScreen";
import DetailsScreen from "./src/screens/RecycleScreen/DetailsScreen";
import NewRecycleScreen from "./src/screens/RecycleScreen/NewRecycleScreen";
import EditRecycleScreen from "./src/screens/RecycleScreen/EditRecycleScreen";
import ImageScreen from "./src/screens/ImageScreen";
import AuthScreen from "./src/screens/AuthScreen";
import * as ScreenOrientation from "expo-screen-orientation";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
	let [fontsLoaded] = useFonts({
		"NoirPro-Heavy": require("./assets/fonts/NoirPro-Heavy.ttf"),
		"NoirPro-HeavyItalic": require("./assets/fonts/NoirPro-HeavyItalic.ttf"),
		"NoirPro-Bold": require("./assets/fonts/NoirPro-Bold.ttf"),
		"NoirPro-BoldItalic": require("./assets/fonts/NoirPro-BoldItalic.ttf"),
		"NoirPro-SemiBold": require("./assets/fonts/NoirPro-SemiBold.ttf"),
		"NoirPro-SemiBoldItalic": require("./assets/fonts/NoirPro-SemiBoldItalic.ttf"),
		"NoirPro-Medium": require("./assets/fonts/NoirPro-Medium.ttf"),
		"NoirPro-MediumItalic": require("./assets/fonts/NoirPro-MediumItalic.ttf"),
		"NoirPro-Regular": require("./assets/fonts/NoirPro-Regular.ttf"),
		"NoirPro-Italic": require("./assets/fonts/NoirPro-Italic.ttf"),
		"NoirPro-Light": require("./assets/fonts/NoirPro-Light.ttf"),
		"NoirPro-LightItalic": require("./assets/fonts/NoirPro-LightItalic.ttf"),
	});

	const theme = extendTheme({
		colors: {
			// Add new color
			primary: {
				50: "#dbf7ff",
				100: "#aee2ff",
				200: "#7ecdff",
				300: "#4db9ff",
				400: "#22a5fe",
				500: "#0e8be5",
				600: "#006cb3",
				700: "#004d81",
				800: "#002e50",
				900: "#001020",
			},
			// Redefinig only one shade, rest of the color will remain same.
			amber: {
				400: "#d97706",
			},
			orange: "#FF931E",
			whiteYellow: "#FED478",
		},
		config: {
			// Changing initialColorMode to 'dark'
			initialColorMode: "light",
		},
		fontConfig: {
			NoirPro: {
				100: {
					normal: "NoirPro-Light",
					italic: "NoirPro-LightItalic",
				},
				200: {
					normal: "NoirPro-Regular",
					italic: "NoirPro-Italic",
				},
				300: {
					normal: "NoirPro-Medium",
					italic: "NoirPro-MediumItalic",
				},
				400: {
					normal: "NoirPro-SemiBold",
					italic: "NoirPro-SemiBoldItalic",
				},
				500: {
					normal: "NoirPro-Bold",
					italic: "NoirPro-BoldItalic",
				},
				600: {
					normal: "NoirPro-Heavy",
					italic: "NoirPro-HeavyItalic",
				},
			},
		},
		fonts: {
			heading: "NoirPro",
			body: "NoirPro",
			mono: "NoirPro",
		},
		components: {
			Button: {
				// Can simply pass default props to change default behaviour of components.
				baseStyle: {
					rounded: "md",
					_text: {
						fontWeight: 200,
					},
				},
				defaultProps: {
					colorScheme: "primary",
				},
			},
			Heading: {
				// Can pass also function, giving you access theming tools
				baseStyle: ({ colorMode }) => {
					return {
						color: "#000",
						fontWeight: "normal",
					};
				},
			},
			Text: {
				baseStyle: ({ colorMode }) => {
					return {
						fontWeight: "200",
						fontFamily: "NoirPro-Light",
					};
				},
			},
			Input: {
				baseStyle: ({ colorMode }) => {
					return {
						color: "#000",
					};
				},
			},
		},
	});

	useEffect(() => {
		// Lock screen orientation to portrait
		ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.PORTRAIT_UP
		);
	}, []);

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaProvider>
				<Provider store={store}>
					<NativeBaseProvider theme={theme}>
						<NavigationContainer>
							<Stack.Navigator screenOptions={{ headerShown: false }}>
								<Stack.Screen name="Auth" component={AuthScreen} />
								<Stack.Screen name="HomeTab" component={RecycleScreen} />
								<Stack.Screen
									name="Details"
									component={DetailsScreen}
									options={{ headerShown: true }}
								/>
								<Stack.Screen
									name="NewRecycle"
									component={NewRecycleScreen}
									options={{ headerShown: true }}
								/>
								<Stack.Screen
									name="EditRecycle"
									component={EditRecycleScreen}
									options={{ headerShown: true }}
								/>
								<Stack.Screen
									name="ImageScreen"
									component={ImageScreen}
									options={{ headerShown: true }}
								/>
							</Stack.Navigator>
						</NavigationContainer>
					</NativeBaseProvider>
				</Provider>
			</SafeAreaProvider>
		);
	}
};

export default App;
