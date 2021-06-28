import React, { useState, useEffect } from "react";
import styled from "styled-components";

const StyledLogoMin = styled.svg`
	height: 150%;
	cursor: pointer;
	transform: translateY(${(props) => (props.visible ? 0 : -20)}px);
	opacity: ${(props) => (props.visible ? 100 : 0)}%;
	transition: opacity 0.2s, transform 0.2s;
	& path {
		stroke-width: 10;
	}
`;

function LogoMin() {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		document.addEventListener("scroll", () => {
			const scrollCheck = window.scrollY >= window.innerHeight - 100;
			if (scrollCheck !== scroll) {
				setScroll(scrollCheck);
			}
		});
	});

	return (
		<StyledLogoMin
			visible={scroll}
			viewBox="-30 -20 350 420"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M63.8133 3C139.313 135.5 180.313 269.5 52.8133 345C-26.079 391.717 4.14594 347.502 38.658 307C59.9219 282.045 82.8133 258.5 82.8133 258.5"
				stroke="black"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M227.313 35C87.086 102.9 259.313 160.5 291.813 230C324.313 299.5 177.544 383.969 121.813 361"
				stroke="black"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</StyledLogoMin>
	);
}

export default LogoMin;
