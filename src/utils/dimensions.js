import { Dimensions } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

/**
 * Returns true if the screen is in portrait mode
 */
export const isPortrait = () => {
	const dim = Dimensions.get("screen");
	return dim.height >= dim.width;
};

/**
 * Returns true of the screen is in landscape mode
 */
export const isLandscape = () => {
	const dim = Dimensions.get("screen");
	return dim.width >= dim.height;
};
