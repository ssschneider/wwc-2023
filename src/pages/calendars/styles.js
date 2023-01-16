import styled from "styled-components";

export const Wrapper = styled.section`
    width: 100%;
    display: flex;
    height: 80vh;
`

export const BlueBox = styled.div`
    background-color: #0099FF;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
`

export const PinkBox = styled.div`
    background-color: #FF818C;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
`

export const SectionTitle = styled.h2`
    font-size: 48px;
    background-color: transparent;
    width: 70%;
    margin: 0 auto;
    text-align: center;
`

export const BtnBlue = styled.button`
    outline: none;
    background-color: #0099FF;
    color: #f1f1f1;
    font-size: 32px;
    text-align: center;
    border: 0px;
    padding: 12px 24px;
    width: 50%;
    margin: 0 auto;
    border-radius: 16px;
    transition: 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        scale: 1.05;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`

export const BtnPink = styled.button`
    outline: none;
    background-color: #FF818C;
    color: #f1f1f1;
    font-size: 32px;
    text-align: center;
    border: 0px;
    padding: 12px 24px;
    width: 50%;
    margin: 0 auto;
    border-radius: 16px;
    transition: 0.5s ease-in-out;

    &:hover {
        cursor: pointer;
        scale: 1.05;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`