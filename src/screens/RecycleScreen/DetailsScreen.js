import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, ScrollView } from "react-native";
import { Flex, Button } from "native-base";
import {
	DetailsDescription,
	DetailsImage,
	DetailsTextWrapper,
	DetailsTitle,
	DetailsWrapper,
} from "../../styles/RecycleDetailsStyles";

const DetailsScreen = ({ navigation, route, recycles }) => {
	const { id } = route.params;
	const recycle = recycles.find((cycle) => cycle.id === id);

	return (
		<View style={styles.detailsContainer}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<DetailsWrapper>
					<DetailsImage alt={recycle.text} source={{ uri: recycle.image }} />
					<DetailsTextWrapper>
						<DetailsTitle>{recycle.text}</DetailsTitle>
						<DetailsDescription>{recycle.description}</DetailsDescription>
					</DetailsTextWrapper>
				</DetailsWrapper>

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
			</ScrollView>
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
