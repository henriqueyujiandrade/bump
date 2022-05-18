import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-width: fit-content;
    min-height: 100%;
    display: flex;
    background-color: #02072f;
    @media only screen and (max-width: 600px) {
        padding-right: 20px;
        margin-left: 0px;
    }
`;

export const Home = styled.a`
    color: #ffffff;
    margin-top: 30px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 30px;
    font-size: 25px;
    width: 100%;
    justify-content: center;
    @media only screen and (max-width: 600px) {
        padding-right: 20px;
        margin-left: 0px;
    }
`;
export const MenuLateral = styled.div`
    background-color: #6d17b0;
    width: 15%;
    height: 100%;
    min-height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Sair = styled.a`
    color: #feee35;
    margin-top: 90px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 500;
    font-size: 25px;
    width: 40%;
    justify-content: space-around;
`;

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    color: #ffff;
    margin-top: 60px;
    width: 90%;
    font-size: 50px;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const AddTask = styled.button`
    background-color: #feee35;
    border-radius: 25.8319px;
    padding: 7px;
    color: #444444;
    height: 56.67px;
    font-weight: 600;
    min-width: 150px;
    max-width: 150px;
`;
export const RemoveTask = styled.button`
    background-color: #6d17b0;
    border-radius: 25.8319px;
    padding: 7px;
    color: #ffff;
    margin-left: 20px;
    height: 56.67px;
    font-weight: 500;
    min-width: 200px;
    max-width: 200px;
`;
export const Group = styled.button`
    background-color: #57aad9;
    border-radius: 8px;
    padding: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 56.67px;
    margin-left: 30px;
    font-weight: 700;
`;
export const NavFilter = styled.nav`
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`;
export const ButtonFilter = styled.button`
    background-color: #feee35;
    font-weight: 700;
    border-radius: 25px;
    margin-top: 20px;
    margin-left: 20px;
    height: 50px;
    min-width: 150px;
    max-width: 150px;
    padding: 7px;
`;

export const Display = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;
export const Date = styled.div`
    margin-left: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px;
`;
export const Body = styled.body`
    font-family: "Inter", sans-serif;
    width: 100vw;
    min-height: 100vh;
    height: 100%;
`;
export const Icone = styled.img`
    width: 90%;
    margin-top: 30px;
    margin-bottom: 30px;
`;
export const TagTeam = styled.button`
    background-color: #b84deb;
    margin: 2px;
    color: #fff;
    border-radius: 15px;
    width: fit-content;
    padding: 10px;
`;
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin: 20px;
    font-size: 20px;
    h6 {
        font-size: 50px;
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-right: 20px;
    }
    flex-wrap: wrap;
`;
export const ContainerPrincipal = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
`;
export const Label = styled.label`
    color: rgb(135, 130, 130);
    display: flex;
    align-items: center;
    padding: 2px;
`;
export const LabelExp = styled.label`
    background-color: #84e439;
    border-radius: 15px;
    width: fit-content;
    padding: 10px;
    display: flex;
    align-items: center;
`;
