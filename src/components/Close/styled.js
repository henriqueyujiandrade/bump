import styled from "styled-components";

export const ConteClose = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    right: -50%;
    top: 20px;
    width: 40px;
    height: 35px;
    background-color: #ffffff;
    border-radius: 5px;
    padding: 8px 3px 3px 3px;
    cursor: pointer;
    > div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        background: #b84deb;
    }
`;
