import styled from "styled-components";

export const Wrapper = styled.header`
    background-color: #f1f1f1;
    width: 100%;
    max-width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 32px 24px;
    margin: 0 auto;
    row-gap: 48px;
`

export const LogoImg = styled.img`
    cursor: pointer;
    transition: 0.5s ease-in-out;
    width: 300px;
    height: auto;

    &:hover {
        scale: 1.1;
    }

    &:active {
        opacity: 0.8;
    }
`

export const NavMenu = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    @media(max-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
    }
`

export const NavItem = styled.button`
    font-size: 24px;
    text-transform: uppercase;
    text-decoration: none;
    color: #0e0e0e;
    border-radius: 16px;
    font-family: 'Josefin Sans', sans-serif;
    padding: 12px 18px;
    outline: none;
    border: 0px;
    transition: 0.5s ease-in-out;

    &:hover {
        background-color: #FCC92B;
        cursor: pointer;
    }

    @media(max-width: 425px) {
        font-size: 18px;
    }
`