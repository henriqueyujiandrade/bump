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

export const ConteCardNew = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 25px;
    background-color: white;
    margin: 0 50px 15px 50px;
    box-sizing: border-box;
    border-radius: 10px;
`;

export const DivInfo = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 18px;
        height: 18px;
        border: 1px solid black;
        margin: 0 20px 0 0;
    }
    h3 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18.5292px;
        line-height: 20px;
        color: #333333;
    }
`;

export const DivAcao = styled.div`
    display: flex;
    align-items: center;
    > img {
        margin-right: 30px;
        cursor: pointer;
    }
    > div {
        display: flex;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 4px solid #b84deb;
        padding: 5px;
        cursor: pointer;
    }
`;

