import React from "react";
import styled, { keyframes } from "styled-components";

const lineAnim = keyframes`
    to {
        stroke-dashoffset: 0px;
    }
`;

const StyledLogo = styled.svg`
	width: 40%;

	@media (max-width: 768px) {
		width: 80%;
	}

	& path:nth-child(1) {
		stroke-dasharray: 575px;
		stroke-dashoffset: 575px;
		animation: ${lineAnim} 0.3s ease forwards;
	}

	& path:nth-child(2) {
		stroke-dasharray: 907px;
		stroke-dashoffset: 907px;
		animation: ${lineAnim} 0.8s 0.3s ease forwards;
	}

	& path:nth-child(3) {
		stroke-dasharray: 517px;
		stroke-dashoffset: 517px;
		animation: ${lineAnim} 0.3s 1.1s ease forwards;
	}

	& path:nth-child(4) {
		stroke-dasharray: 425px;
		stroke-dashoffset: 425px;
		animation: ${lineAnim} 0.6s 1.4s ease forwards;
	}
`;

function Logo() {
	return (
		<StyledLogo
			id="logo"
			viewBox="0 0 606 369"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				id="j"
				d="M63.8133 3C139.313 135.5 180.313 269.5 52.8133 345C-26.079 391.717 4.14594 347.502 38.658 307C59.9219 282.045 82.8133 258.5 82.8133 258.5"
				stroke="black"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				id="oaquin"
				d="M139.779 282.67C132.779 290.67 121.479 308.47 132.279 315.67C143.079 322.87 161.113 296.67 168.779 282.67C166.279 279.837 158.379 277.67 146.779 291.67C135.179 305.67 183.647 287.837 203.813 277.17C191.48 283.337 159.079 297.17 172.279 303.17C185.479 309.17 200.946 293.837 208.779 282.67C199.113 292.837 188.379 305.17 208.779 295.17C229.179 285.17 235.946 276.67 236.779 273.67C214.113 296.004 169.479 342.67 172.279 350.67C175.079 358.67 226.779 300.67 252.279 270.67C240.446 284.17 219.879 309.57 232.279 303.17C247.779 295.17 276.279 262.67 272.779 277.17C269.979 288.77 265.946 291.67 264.279 291.67C272.279 268.837 288.479 228.57 289.279 250.17C290.279 277.17 261.279 320.67 298.279 277.17C335.279 233.67 313.279 296.17 327.779 286.67C339.379 279.07 354.613 270.504 360.779 267.17"
				stroke="black"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				id="s"
				d="M390.313 35C250.086 102.9 422.313 160.5 454.813 230C487.313 299.5 340.544 383.969 284.813 361"
				stroke="black"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				id="oto"
				d="M488.586 285.02C477.159 298.85 460.137 324.217 483.464 315.05C512.622 303.591 527.595 288.181 502.377 279.883C482.203 273.245 518.926 249.195 539.81 238C544.407 263.552 550.291 314.101 537.052 311.889C520.502 309.123 537.052 273.166 581.183 274.352C625.314 275.537 591.428 295.689 571.726 300.035C558.554 302.941 567.215 290.042 576.09 279.883"
				stroke="black"
				strokeWidth="6"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</StyledLogo>
	);
}

export default Logo;
