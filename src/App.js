import Introduction from "./Introduction";
import Header from "./Header";
import styled from "styled-components";

const StyledSection = styled.section`
	height: 100vh;
	width: 100%;
	display: grid;
`;

const StyledH2 = styled.h2`
	font-weight: 900;
	font-size: 4rem;
	align-self: end;
	justify-self: end;
	margin-right: 3rem;

	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;

const StyledImage = styled.img`
	width: 40vw;
	align-self: end;

	@media (max-width: 768px) {
		width: 90vw;
		margin-bottom: 2rem;
	}
`;

function App() {
	return (
		<>
			<Header />
			<main>
				<Introduction />
				<StyledSection>
					<StyledH2>En construcción</StyledH2>
					<StyledImage
						src="/imgs/main-image.jpg"
						alt="sitting man looking to the city front the window of a building"
					/>
				</StyledSection>
			</main>
		</>
	);
}

export default App;
