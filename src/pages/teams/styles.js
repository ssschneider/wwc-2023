import styled from "styled-components";

export const SectionTitle = styled.h2`
    font-size: 48px;
    text-align: center;
`

export const Wrapper = styled.section`
    width: 80%;
    margin: 48px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 32px;

    @media (max-width: 938px) {
        justify-content: center;
    }
`