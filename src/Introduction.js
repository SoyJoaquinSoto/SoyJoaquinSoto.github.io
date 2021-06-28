import React from "react";
import Logo from "./Logo";
import Descriptions from "./Descriptions";
import styled from "styled-components";

const StyledIntroduction = styled.section`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3em;
`;

function Introduction() {
	return (
		<StyledIntroduction>
			<Logo />
			<Descriptions />
		</StyledIntroduction>
	);
}

export default Introduction;
