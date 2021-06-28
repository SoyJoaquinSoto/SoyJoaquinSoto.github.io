import React from "react";
import styled, { keyframes } from "styled-components";

const fadeInBottom = keyframes`
    to {
        opacity: 100%;
        transform: translateY(0px);
    }
`;

const StyledDescription = styled.p`
	opacity: 0%;
	transform: translateY(10px);
	font-size: 1.5rem;
	font-weight: 300;
	text-align: center;
	letter-spacing: 0.5em;
	animation: ${fadeInBottom} 0.5s 2.1s ease forwards;

	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

function Descriptions(props) {
	return <StyledDescription>desarrollador web</StyledDescription>;
}

export default Descriptions;
