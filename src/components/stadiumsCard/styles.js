import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    width: 600px;
    transition: 0.5s ease-in-out;
    margin: 0 auto;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media(max-width: 606px) {
        width: 400px;
    }

    @media(max-width: 420px) {
        width: 310px;
    }
`

export const Image = styled.img`
    height: 50vh;
    width: auto;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;

    @media(max-width: 606px) {
        height: 30vh;
    }
`

export const CardData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 24px;
    justify-content: flex-start;
    background-color: #009643;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
`

export const Title = styled.h2`
    font-size: 32px;
    background-color: transparent;
    color: #f1f1f1;

    @media(max-width: 606px) {
        font-size: 24px;
    }
`

export const Information = styled.h2`
    font-size: 24px;
    background-color: transparent;
    color: #f1f1f1;

    @media(max-width: 606px) {
        font-size: 16px;
    }
`