import styled from "styled-components";

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 64px;
    gap: 64px;
    border-radius: 16px;
    background-color: #FD5109;
    width: 400px;
    transition: 0.5s ease-in-out;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    @media(max-width: 355px) {
        width: 95%;
        padding: 32px;
    }
`

export const CardTitle = styled.h2`
    font-size: 32px;
    text-align: center;
    color: #f1f1f1;
    background-color: transparent;
`

export const TeamsSection = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-content: space-between;
    gap: 48px 24px;
    background-color: transparent;
`

export const Teams = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background-color: transparent;

    img {
        border-radius: 100px;
        width: 100px;
        height: 100px;
        background-color: transparent;

        @media(max-width: 355px) {
        width: 80px;
    }
    }

    p {
        font-size: 16px;
        color: #f1f1f1;
        width: 70%;
        margin: 0 auto;
        text-align: center;
        background-color: transparent;
    }
`