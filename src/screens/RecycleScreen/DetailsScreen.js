import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View } from "react-native";
import { Flex, Image, Heading, Button, Text } from "native-base";

const DetailsScreen = ({ navigation, route, recycles }) => {
	const { id } = route.params;
	const recycle = recycles.find((cycle) => cycle.id === id);

	return (
		<View style={styles.detailsContainer}>
			<Heading ml={5} my={5} size="xl">
				{recycle.text}
			</Heading>
			<View style={styles.detailsBody}>
				<Flex shadow={9} flexDirection="column" alignItems="center">
					<Image
						borderRadius={8}
						source={{ uri: recycle.image }}
						size="2xl"
						alt={recycle.text}
					/>
				</Flex>

				<Flex mt={8} alignSelf="center">
					<Text fontSize="5xl">{recycle.description}</Text>
				</Flex>

				{/** Buttons */}
				<View style={{ flexGrow: 1 }}>
					<Flex
						style={styles.buttonWrapper}
						flexGrow={1}
						flexDirection="row"
						alignItems="flex-end"
						justifyContent="space-between"
					>
						<Flex flexDirection="column" flexGrow={1}>
							<Button
								size="lg"
								bg="primary.500"
								onPress={() => navigation.navigate("Home")}
								mx={5}
							>
								Home
							</Button>
						</Flex>
						<Flex flexDirection="column" flexGrow={1}>
							<Button
								size="lg"
								bg="whiteYellow"
								mx={5}
								onPress={() => navigation.navigate("EditRecycle", { id })}
							>
								Edit
							</Button>
						</Flex>
					</Flex>
				</View>
			</View>
		</View>
	);
};

const mapStateToProps = ({ reducerRecycle }) => {
	const { recycles } = reducerRecycle;
	return { recycles };
};

export default connect(mapStateToProps)(DetailsScreen);

const styles = StyleSheet.create({
	detailsContainer: {
		flex: 1,
	},
	detailsBody: {
		display: "flex",
		flexDirection: "column",
		flex: 1,
	},
	buttonWrapper: {
		marginTop: 20,
		marginBottom: 100,
	},
});
