import styled from "styled-components";

export const Card = styled.View`
	flex-direction: column;
	justify-content: center;
	background-color: white;
	margin: 0 20px 20px;
	border-radius: 7px;
`;

export const CardTitleWrapper = styled.View`
	flex-direction: column;
	justify-content: center;
	padding: 10px 20px;
`;

export const CardTitle = styled.Text`
	font-size: 25px;
	font-family: NoirPro-Regular;
`;

export const CardDescription = styled.Text`
	font-size: 13px;
	color: gray;
	font-family: NoirPro-Light;
	margin-top: 7px;
`;

export const CardImage = styled.Image`
	resize-mode: cover;
	width: 100%;
	height: 250px;
	border-radius: 7px;
	border-top-left-radius: 0;
	border-top-right-radius: 0;
`;
