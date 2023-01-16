import {
	Logo,
	SectionTitle,
	TextParagraph,
	TextSection,
	Wrapper,
} from "./styles";
import logoImage from "../../assets/logo-vertical.svg";

const AboutSection = () => {
	return (
		<Wrapper>
			<Logo src={logoImage} />
			<TextSection>
				<SectionTitle>FIFA Women's World Cup</SectionTitle>
				<TextParagraph>
					The 2023 FIFA Women's World Cup is set to be the 9th edition of the tournament. This edition will be hosted by Australia and New Zealand and is set to happen between July, 20th to August, 20th.
				</TextParagraph>
				<TextParagraph>
					This is an edition of many firsts, but the biggest one yet is that it will be the first WWC with 32 teams, replicating the format of the Men's World Cup. This edition also counts with a massive increase on the prizes, with the winner taking $4mi home.
				</TextParagraph>
                <TextParagraph>
					The USA are the current champions, on their 4th title. Closely followed by Germany with two and Norway and Japan with one each. Currently, the USA, England, Germany, Spain and Brazil are the overall favourites to win the tournament.
				</TextParagraph>
			</TextSection>
		</Wrapper>
	);
};

export default AboutSection;
