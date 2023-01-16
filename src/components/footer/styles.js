import styled from "styled-components";

export const Wrapper = styled.footer`
    background-color: #0E0E0E;
    width: 100%;
    padding: 24px 48px;
`

export const FooterContent = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: transparent;
`

export const Dev = styled.p`
    font-size: 18px;
    color: #f1f1f1;
    text-transform: uppercase;
    background-color: transparent;

    @media(max-width: 425px) {
        font-size: 12px;
    }

    a {
        color: #FCC92B;
        background-color: transparent;
        text-decoration: none;
    }
`