import AboutSection from "../../components/about/about"
import Header from "../../components/header/header"
import hero from "../../assets/hero.svg"
import { Hero } from "./styles"
import Footer from "../../components/footer/footer"

const HomePage = () => {
    return (
        <>
            <Header />
            <Hero src={hero} alt="Player running with Australian and New Zealand landmarks on the background"/>
            <AboutSection />
            <Footer />
        </>
    )
}

export default HomePage