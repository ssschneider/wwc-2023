import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import StadiumsCard from "../../components/stadiumsCard/stadiumsCard";
import { SectionTitle, Wrapper } from "./styles";

const StadiumsPage = () => {
	return (
		<>
			<Header />
            <SectionTitle>Stadiums</SectionTitle>
			<Wrapper>
				<StadiumsCard name="Eden Park" location="Auckland, NZ" capacity="48.276" image="https://kia.co.nz/assets/Uploads/190208blackcapsLLP-1000x500.jpg"/>
				<StadiumsCard name="Melbourne Rectangular Stadium" location="Melbourne, AUS" capacity="30.050" image="https://www.austadiums.com/stadiums/photos/AAMI-Park-melbourne.jpg"/>
				<StadiumsCard name="Wellington Regional Stadium" location="Melbourne, AUS" capacity="34.500" image="https://digitalhub.fifa.com/transform/bf1ee1a9-f38f-47ad-bca0-a2796ac2fac5/aarrqfnuj5gxdlj3olod-jpg"/>
				<StadiumsCard name="Brisbane Stadium" location="Brisbane, AUS" capacity="52.263" image="https://suncorpstadium.com.au/CMSPages/GetFile.aspx?guid=458e03e3-8d96-4a69-868d-5857ce070a8b"/>
				<StadiumsCard name="Hindmarsh Stadium" location="Adelaide, AUS" capacity="16.500" image="https://www.austadiums.com/stadiums/photos/coopers-stadium-reds.jpg"/>
				<StadiumsCard name="Stadium Australia" location="Sydney, AUS" capacity="83.500" image="https://www.austadiums.com/stadiums/photos/anz-stadium.jpg"/>
				<StadiumsCard name="Dunedin Stadium" location="Dunedin, NZ" capacity="30.748" image="https://davgr4qaz7nzj.cloudfront.net/lions/wp-content/uploads/2017/04/02110658/Forsyth-Barr-Stadium.jpg"/>
				<StadiumsCard name="Perth Rectangular Stadium" location="Perth, AUS" capacity="22.225" image="https://digitalhub.fifa.com/transform/a3d552a7-126d-42b5-93ed-87e74383e7fa/Perth-Rectangular-Stadium"/>
				<StadiumsCard name="Sydney Football Stadium" location="Sydney, AUS" capacity="42.500" image="https://www.austadiums.com/news/images/allianz-stadium-aug2022-3.jpg"/>
				<StadiumsCard name="Waikato Stadium" location="Hamilton, NZ" capacity="25.800" image="https://www.fmgstadiumwaikato.co.nz/assets/Uploads/FMG-Stadium-Waikato.jpg"/>
			</Wrapper>
			<Footer />
		</>
	);
};

export default StadiumsPage;
