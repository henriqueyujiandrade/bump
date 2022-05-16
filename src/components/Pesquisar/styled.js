import styled from "styled-components";

export const ConteSearching = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    :nth-last-child(1) {
        margin-bottom: 0;
    }
    input {
        width: 374px;
        padding: 10px 20px;
        border-radius: 15px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;

        color: #acabab;
    }
`;

export const DivsaoSearching = styled.div`
    width: 100%;
    height: 2px;
    background-color: black;
    margin: 25px 0;
`;
