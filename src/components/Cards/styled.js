import styled from "styled-components";

export const CardMembrosConte = styled.div`
    background: #e4e4e4;
    border-radius: 25px;
    display: flex;
    align-items: center;
    padding: 7px 20px;
    margin-bottom: 30px;
    :nth-last-child(1) {
        margin-bottom: 0;
    }
`;

export const CardMembrosInfo = styled.div`
    display: flex;
    align-items: center;
    margin-right: 119px;
    img {
        margin-right: 21px;
        cursor: pointer;
    }
    h1 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 23.7368px;
        line-height: 35px;
        color: #000000;
    }
`;

export const CardMembrosAcao = styled.div`
    display: flex;
    align-items: center;
    > img {
        margin-right: 19px;
        cursor: pointer;
    }
    > div {
        cursor: pointer;
        border: 2px solid black;
        border-radius: 50%;
        padding: 2px;
        img {
            margin-right: 10px;
            :nth-last-child(1) {
                margin-right: 0px;
            }
        }
    }
`;
