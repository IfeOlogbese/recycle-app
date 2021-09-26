import styled from "styled-components";

export const DetailsWrapper = styled.View`
	flex-direction: column;
`;

export const DetailsImage = styled.Image`
	resize-mode: cover;
	width: 100%;
	height: 250px;
`;

export const DetailsTextWrapper = styled.View`
	margin: 15px 20px;
	flex-direction: column;
`;

export const DetailsTitle = styled.Text`
	font-size: 30px;
	font-family: NoirPro-Regular;
`;

export const DetailsDescription = styled.Text`
	font-size: 18px;
	color: gray;
	font-family: NoirPro-Light;
	margin-top: 7px;
`;

