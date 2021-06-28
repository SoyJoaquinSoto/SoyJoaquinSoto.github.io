import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import LogoMin from "./LogoMin";

const StyledNav = styled.nav`
	width: 100vw;
	height: 4em;
	position: fixed;
	// background-color: red;
	padding: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;

	// border-bottom: 0.1em solid black;
	// box-shadow: 0 0 0.5em gray;
`;

function Header(props) {
	return (
		<StyledNav>
			<Menu />
			<LogoMin />
		</StyledNav>
	);
}

export default Header;
