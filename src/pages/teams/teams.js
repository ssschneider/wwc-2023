import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import TeamsCard from "../../components/teamsCard/teamsCard";
import { SectionTitle, Wrapper } from "./styles";

//FLAGS
import flagNewZealand from "../../assets/flags/new-zealand.svg"
import flagNorway from "../../assets/flags/norway.svg"
import flagPhilippines from "../../assets/flags/philippines.svg"
import flagSwitzerland from "../../assets/flags/switzerland.svg"
import flagAustralia from "../../assets/flags/australia.svg"
import flagCanada from "../../assets/flags/canada.svg"
import flagIreland from "../../assets/flags/ireland.svg"
import flagNigeria from "../../assets/flags/nigeria.svg"
import flagCostaRica from "../../assets/flags/costa-rica.svg"
import flagJapan from "../../assets/flags/japan.svg"
import flagSpain from "../../assets/flags/spain.svg"
import flagZambia from "../../assets/flags/zambia.svg"
import flagChina from "../../assets/flags/china.svg"
import flagDenmark from "../../assets/flags/denmark.svg"
import flagEngland from "../../assets/flags/england.svg"
import flagUndefined from "../../assets/flags/undefined.svg"
import flagNetherlands from "../../assets/flags/netherlands.svg"
import flagUSA from "../../assets/flags/usa.svg"
import flagVietnam from "../../assets/flags/vietnam.svg"
import flagBrazil from "../../assets/flags/brazil.svg"
import flagFrance from "../../assets/flags/france.svg"
import flagJamaica from "../../assets/flags/jamaica.svg"
import flagArgentina from "../../assets/flags/argentina.svg"
import flagSouthAfrica from "../../assets/flags/south-africa.svg"
import flagSweden from "../../assets/flags/sweden.svg"
import flagItaly from "../../assets/flags/italy.svg"
import flagColombia from "../../assets/flags/colombia.svg"
import flagGermany from "../../assets/flags/germany.svg"
import flagMorocco from "../../assets/flags/morocco.svg"
import flagSouthKorea from "../../assets/flags/south-korea.svg"


const TeamsPage = () => {
	return (
		<>
			<Header />
			<SectionTitle>Teams</SectionTitle>
			<Wrapper>
				<TeamsCard
					group="Group A"
					team1="New Zealand"
					src1={flagNewZealand}
					team2="Norway"
					src2={flagNorway}
					team3="Philippines"
					src3={flagPhilippines}
					team4="Switzerland"
					src4={flagSwitzerland}
				/>
				<TeamsCard
					group="Group B"
					team1="Australia"
					src1={flagAustralia}
					team2="Canada"
					src2={flagCanada}
					team3="Ireland"
					src3={flagIreland}
					team4="Nigeria"
					src4={flagNigeria}
				/>
				<TeamsCard
					group="Group C"
					team1="Costa Rica"
					src1={flagCostaRica}
					team2="Japan"
					src2={flagJapan}
					team3="Spain"
					src3={flagSpain}
					team4="Zambia"
					src4={flagZambia}
				/>
				<TeamsCard
					group="Group D"
					team1="China"
					src1={flagChina}
					team2="Denmark"
					src2={flagDenmark}
					team3="England"
					src3={flagEngland}
					team4="Winner Playoff B"
					src4={flagUndefined}
				/>
				<TeamsCard
					group="Group E"
					team1="Netherlands"
					src1={flagNetherlands}
					team2="USA"
					src2={flagUSA}
					team3="Vietnam"
					src3={flagVietnam}
					team4="Winner Playoff A"
					src4={flagUndefined}
				/>
				<TeamsCard
					group="Group F"
					team1="Brazil"
					src1={flagBrazil}
					team2="France"
					src2={flagFrance}
					team3="Jamaica"
					src3={flagJamaica}
					team4="Winner Playoff C"
					src4={flagUndefined}
				/>
				<TeamsCard
					group="Group G"
					team1="Argentina"
					src1={flagArgentina}
					team2="South Africa"
					src2={flagSouthAfrica}
					team3="Italy"
					src3={flagItaly}
					team4="Sweden"
					src4={flagSweden}
				/>

<TeamsCard
					group="Group H"
					team1="Germany"
					src1={flagGermany}
					team2="Colombia"
					src2={flagColombia}
					team3="Morocco"
					src3={flagMorocco}
					team4="South Korea"
					src4={flagSouthKorea}
				/>
			</Wrapper>
			<Footer />
		</>
	);
};

export default TeamsPage;
