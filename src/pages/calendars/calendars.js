import Footer from "../../components/footer/footer"
import Header from "../../components/header/header"
import { BlueBox, BtnBlue, BtnPink, PinkBox, SectionTitle, Wrapper } from "./styles"

const CalendarsPage = () => {
    const handleCalendarFIFA = () => {
        window.open("https://digitalhub.fifa.com/m/f11e016d9cf9bd5/original/FIFA-Women-s-World-Cup-2023-Match-schedule.pdf")
    }

    const handleCalendarBrazil = () => {
        window.open("https://ssschneider.github.io/calendario-wwc-2023/")
    }

    return (
        <>
            <Header />
            <Wrapper>
                <PinkBox>
                    <SectionTitle>Oficial FIFA Calendar</SectionTitle>
                    <BtnBlue onClick={handleCalendarFIFA}>Download Oficial FIFA Calendar</BtnBlue>
                </PinkBox>
                <BlueBox>
                    <SectionTitle>Brazil's TimeZones Calendar</SectionTitle>
                    <BtnPink onClick={handleCalendarBrazil}>Visit Brazil's Timezones Calendar</BtnPink>
                </BlueBox>
        </Wrapper>
            <Footer />
        </>
    )
}

export default CalendarsPage