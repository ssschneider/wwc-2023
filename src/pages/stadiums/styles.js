import styled from "styled-components";

export const Wrapper = styled.section`
    width: 80%;
    margin: 48px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px;
    justify-content: center;

    @media(max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media(max-width: 768px) {
        width: 100%;
    }
`

export const SectionTitle = styled.h2`
    text-align: center;
    font-size: 48px;
`