import styled from "styled-components";

export const ModMembroConte = styled.div`
    @media (min-width: 750px) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.5);
    }
`;

export const ConteForm = styled.form`
    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        > h1 {
            font-family: "Poppins";
            font-style: normal;
            font-weight: 700;
            font-size: 26.6341px;
            line-height: 40px;
            color: #ffffff;
            margin-bottom: 24px;
        }
    }
`;

export const ConteCard = styled.div`
    @media (min-width: 750px) {
        max-height: 300px;
        overflow-y: auto;
        margin-bottom: 15px;
    }
`;
