import styled from "styled-components";

export const Wrapper = styled.section`
    width: 80%;
    margin: 48px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 425px) {
        flex-direction: column;
        gap: 48px;
    }
`

export const Logo = styled.img`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    @media(max-width: 425px) {
        height: 50vh;
        width: auto;
    }
`

export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    @media(max-width: 425px) {
        width: 80%;
    }
`

export const SectionTitle = styled.h2`
    font-size: 48px;
    text-align: center;
    margin-bottom: 24px;

    @media(max-width: 768px) {
        font-size: 32px;
    }
`

export const TextParagraph = styled.p`
    font-size: 24px;
    margin-bottom: 16px;
    text-align: justify;

    @media(max-width: 768px) {
        font-size: 18px;
    }
`