import styled from "styled-components";

export const ModAddSubTaskConte = styled.div`
    @media (min-width: 750px) {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100vh;
        background-color: rgb(0, 0, 0, 0.5);
        h1 {
            font-family: "Inter";
            font-style: normal;
            font-weight: 700;
            font-size: 38.0917px;
            line-height: 46px;
            color: #ffffff;
        }
    }
`;

export const TitleH1 = styled.h1`
    @media (min-width: 750px) {
        text-align: center;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 24.0917px;
        line-height: 26px;
        color: #ffffff;
        margin-bottom: 25px;
    }
`;

export const ConteFormSub = styled.form`
    @media (min-width: 750px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        button {
            margin-bottom: 30px;
        }
    }
`;
