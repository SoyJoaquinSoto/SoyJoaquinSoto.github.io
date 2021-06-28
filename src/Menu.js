import React from "react";
import styled from "styled-components";

const StyledMenu = styled.svg`
	height: 100%;
	cursor: pointer;
`;

function Menu(props) {
	return (
		<StyledMenu
			viewBox="0 0 64 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect width="64" height="8" fill="black" />
			<rect y="18" width="64" height="8" fill="black" />
			<rect y="36" width="64" height="8" fill="black" />
		</StyledMenu>
	);
}

export default Menu;
