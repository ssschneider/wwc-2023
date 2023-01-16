import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { LogoImg, NavItem, NavMenu, Wrapper } from "./styles";

const Header = () => {
    const navigate = useNavigate()

    const handleHome = () => {
        navigate("/")
    }

    const handleTeams = () => {
        navigate("/teams")
    }

    const handleStadiums = () => {
        navigate("/stadiums")
    }

    const handleCalendars = () => {
        navigate("/calendars")
    }

	return (
		<Wrapper>
			<LogoImg src={logo} alt="FIFA Women's World Cup 2023 Logo" onClick={handleHome}/>

            <NavMenu>
                <NavItem onClick={handleHome}>About</NavItem>
                <NavItem onClick={handleTeams}>Teams</NavItem>
                <NavItem onClick={handleStadiums}>Stadiums</NavItem>
                <NavItem onClick={handleCalendars}>Calendars</NavItem>
            </NavMenu>
		</Wrapper>
	);
};

export default Header
