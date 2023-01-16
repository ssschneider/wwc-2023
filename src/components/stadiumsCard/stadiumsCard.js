import { CardData, CardWrapper, Image, Information, Title } from "./styles"

const StadiumsCard = ({image, name, location, capacity}) => {
    return (
        <CardWrapper>
            <Image src={image} alt={name}/>
            <CardData>
                <Title>{name}</Title>
                <Information>Local: {location}</Information>
                <Information>Capacity: {capacity} people</Information>
            </CardData>
        </CardWrapper>
    )
}

export default StadiumsCard