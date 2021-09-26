import React, { useLayoutEffect } from "react";
import { connect } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
	DrawerItem,
} from "@react-navigation/drawer";
import { Image, Text, Center, HStack } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	getFocusedRouteNameFromRoute,
	DrawerActions,
} from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Foundation, Ionicons, MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import FavoriteScreen from "./FavoriteScreen";
import AccountScreen from "./AccountScreen";
import MessagesScreen from '../MessagesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function getHeaderTitle(route) {
	// If the focused route is not found, we need to assume it's the initial screen
	// This can happen during if there hasn't been any navigation inside the screen
	// In our case, it's "Recycles" as that's the first screen inside the navigator
	const routeName = getFocusedRouteNameFromRoute(route) ?? "Recycles";

	switch (routeName) {
		case "Home":
			return "Home Screen";
		case "Favorite":
			return "Favorite Screen";
		case "Message":
			return "Message Screen";
		case "Account":
			return "Account Screen";
	}
}

function getTabBarIcon(route, focused, color, size) {
	let iconName;

	if (route.name === "Home") {
		iconName = focused ? "home" : "home-outline";
		return <Ionicons name={iconName} size={size} color={color} />;
	} else if (route.name === "Favorite") {
		iconName = focused ? "favorite" : "favorite-outline";
		return <MaterialIcons name={iconName} size={size} color={color} />;
	} else if (route.name === "Message") {
		iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline";
		return <Ionicons name={iconName} size={size} color={color} />;
	} else if (route.name === "Account") {
		iconName = focused ? "person-circle" : "person-circle-outline";
		return <Ionicons name={iconName} size={size} color={color} />;
	}
}

const TabScreen = ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({ headerTitle: getHeaderTitle(route) });
	}, [navigation, route]);

	return (
		<Tab.Navigator
			screenOptions={({ navigation, route }) => ({
				headerLeft: () => (
					<TouchableOpacity
						onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
					>
						<Foundation
							style={{ marginLeft: 15 }}
							name="list"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
				),
				headerRight: () => (
					<TouchableOpacity onPress={() => navigation.navigate("NewRecycle")}>
						<Foundation
							style={{ marginRight: 15 }}
							name="plus"
							size={24}
							color="tomato"
						/>
					</TouchableOpacity>
				),
				tabBarIcon: ({ focused, color, size }) =>
					getTabBarIcon(route, focused, color, size),
				tabBarActiveTintColor: "#006cb3",
				tabBarInactiveTintColor: "gray",
			})}
		>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Favorite" component={FavoriteScreen} />
			<Tab.Screen name="Message" component={MessagesScreen} />
			<Tab.Screen name="Account" component={AccountScreen} />
		</Tab.Navigator>
	);
};

const CustomDrawerContent = (props) => {
	const { recycles } = props;
	return (
		<DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
			<DrawerItem
				label={() => (
					<Image
						source={require("../../../assets/recycle-icon.png")}
						alt="Alternate Text"
						size={"md"}
					/>
				)}
				onPress={() => props.navigation.closeDrawer()}
			/>
			{/* <DrawerItemList {...props} /> */}
			{recycles.map((recycle) => (
				<DrawerItem
					label={() => (
						<HStack style={{ alignItems: "center" }}>
							<Image
								source={{ uri: recycle.image }}
								alt="Recycle icon"
								size={"xs"}
								borderRadius={5}
							/>
							<Center ml={5}>
								<Text>{recycle.text}</Text>
							</Center>
						</HStack>
					)}
					key={recycle.id}
					onPress={() => props.navigation.closeDrawer()}
				/>
			))}
			<DrawerItem
				label="Close drawer"
				onPress={() => props.navigation.closeDrawer()}
			/>
			<DrawerItem
				label="Toggle drawer"
				onPress={() => props.navigation.toggleDrawer()}
			/>
		</DrawerContentScrollView>
	);
};

const RecycleScreen = (props) => {
	const { recycles } = props;
	return (
		<Drawer.Navigator
			screenOptions={{ headerShown: false }}
			drawerContent={(props) => (
				<CustomDrawerContent recycles={recycles} {...props} />
			)}
		>
			{/* {recycles.map((recycle) => (
				<Drawer.Screen key={recycle.id} name={recycle.text} component={TabScreen} />
			))} */}
			<Drawer.Screen name="Recycles" component={TabScreen} />
		</Drawer.Navigator>
	);
};

const mapStateToProps = ({ reducerRecycle }) => {
	const { recycles } = reducerRecycle;
	return { recycles };
};

export default connect(mapStateToProps)(RecycleScreen);
