import { CardContainer, CardTitle, Teams, TeamsSection } from "./styles"

const TeamsCard = ({group, team1, team2, team3, team4, src1, src2, src3, src4}) => {
    return (
        <CardContainer>
            <CardTitle>{group}</CardTitle>
            <TeamsSection>
                <Teams>
                    <img src={src1} alt="Australian Flag"/>
                    <p>{team1}</p>
                </Teams>

                <Teams>
                    <img src={src2} alt="Australian Flag"/>
                    <p>{team2}</p>
                </Teams>

                <Teams>
                    <img src={src3} alt="Australian Flag"/>
                    <p>{team3}</p>
                </Teams>

                <Teams>
                    <img src={src4} alt="Australian Flag"/>
                    <p>{team4}</p>
                </Teams>
            </TeamsSection>
        </CardContainer>
    )
}

export default TeamsCard