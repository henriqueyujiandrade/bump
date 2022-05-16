import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #02072f;
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
export const Logo = styled.h4`
    color: #a346ff;
    display: flex;
    flex-direction: row;
    font-family: "Mitr", sans-serif;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.679);
    font-size: 50px;
    margin-top: 30px;
`;
export const Logo2 = styled.p`
    color: #fab219;
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
    width: 100%;
    font-size: 50px;
    justify-content: space-between;
`;
export const AddTask = styled.button`
    background-color: #feee35;
    border-radius: 25.8319px;
    padding: 7px;
    color: #444444;
    height: 56.67px;
    font-weight: 600;
`;
export const RemoveTask = styled.button`
    background-color: #6d17b0;
    border-radius: 25.8319px;
    padding: 7px;
    color: #ffff;
    margin-left: 20px;
    height: 56.67px;
    font-weight: 500;
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
    width: 60%;
    align-items: center;
    justify-content: space-between;
`;
export const ButtonFilter = styled.button`
    background-color: #feee35;
    font-weight: 700;
    border-radius: 25px;
    margin-top: 20px;
    margin-left: 20px;
    height: 50px;
    min-width: 150px;
    padding: 7px;
`;

export const Display = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
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
`;
export const ContainerPrincipal = styled.div`
    width: 100%;
`;
export const Label = styled.label`
    color: rgb(135, 130, 130);
    display: flex;
    align-items: center;
    width: 35px;
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