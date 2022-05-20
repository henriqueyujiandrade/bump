import styled from "styled-components";

export const ModExcluirConte = styled.div`
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

export const ModExcluir = styled.div`
    @media (min-width: 750px) {
        background: #b84deb;
        border-radius: 25px;
        padding: 0px 42px 45px 42px;
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
            margin: 30px 0 24px 0;
        }
        > div {
            button {
                margin-right: 30px;
                :nth-last-child(1) {
                    margin-right: 0px;
                }
            }
        }
    }
`;
