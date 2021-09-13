import React from "react";
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

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
	let [fontsLoaded] = useFonts({
		"NoirPro-Heavy": require("./assets/fonts/NoirPro-Heavy.ttf"),
		"NoirPro-Bold": require("./assets/fonts/NoirPro-Bold.ttf"),
		"NoirPro-SemiBold": require("./assets/fonts/NoirPro-SemiBold.ttf"),
		"NoirPro-Medium": require("./assets/fonts/NoirPro-Medium.ttf"),
		"NoirPro-Regular": require("./assets/fonts/NoirPro-Regular.ttf"),
		"NoirPro-Light": require("./assets/fonts/NoirPro-Light.ttf"),
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
			orange: '#FF931E',
			whiteYellow: '#FED478',
		},
		config: {
			// Changing initialColorMode to 'dark'
			initialColorMode: "light",
		},
		fontConfig: {
			NoirPro: {
				100: {
					normal: "NoirPro-Light",
				},
				200: {
					normal: "NoirPro-Regular",
				},
				300: {
					normal: "NoirPro-Medium",
				},
				400: {
					normal: "NoirPro-SemiBold",
				},
				500: {
					normal: "NoirPro-Bold",
				},
				600: {
					normal: "NoirPro-Heavy",
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
						color: "#000",
						fontWeight: "Light",
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

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaProvider>
				<Provider store={store}>
					<NativeBaseProvider theme={theme}>
						<NavigationContainer>
							<Stack.Navigator
								initialRouteName="HomeTab"
								screenOptions={{ headerShown: false }}
							>
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
