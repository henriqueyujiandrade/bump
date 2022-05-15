import { useContext } from "react";
import { TasksContext } from "../../Providers/Tasks";
import styled from "styled-components";
import "./styles.css";
import { Link } from "react-router-dom";

import {
  AiFillHome,
  AiOutlineImport,
  AiOutlineSnippets,
  AiOutlineLaptop,
  AiOutlineTeam,
  AiOutlineClockCircle,
  AiOutlineWechat,
  AiOutlineClose,
} from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
const Projects = () => {
  const { tasks, addTask, removeTask } = useContext(TasksContext);

  const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #02072f;
  `;

  const Home = styled.a`
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
  const MenuLateral = styled.div`
    background-color: #6d17b0;
    width: 15%;
    height: 100%;
    min-height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Logo = styled.h4`
    color: #a346ff;
    display: flex;
    flex-direction: row;
    font-family: "Mitr", sans-serif;
    text-shadow: 2px 1px 2px rgba(0, 0, 0, 0.679);
    font-size: 50px;
    margin-top: 30px;
  `;
  const Logo2 = styled.h4`
    color: #fab219;
  `;
  const Sair = styled.a`
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

  const Header = styled.header`
    display: flex;
    flex-direction: row;
    color: #ffff;
    margin-top: 60px;
    width: 100%;
    font-size: 50px;
    justify-content: space-between;
  `;
  const AddTask = styled.button`
    background-color: #feee35;
    border-radius: 25.8319px;
    padding: 7px;
    color: #444444;
    height: 56.67px;
    font-weight: 600;
  `;
  const RemoveTask = styled.button`
    background-color: #6d17b0;
    border-radius: 25.8319px;
    padding: 7px;
    color: #ffff;
    margin-left: 20px;
    height: 56.67px;
    font-weight: 500;
  `;
  const Group = styled.button`
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
  const NavFilter = styled.nav`
    display: flex;
    width: 60%;
    align-items: center;
    justify-content: space-between;
  `;
  const ButtonFilter = styled.button`
    background-color: #feee35;
    font-weight: 700;
    border-radius: 25px;
    margin-top: 20px;
    margin-left: 20px;
    height: 50px;
    min-width: 150px;
    padding: 7px;
  `;

  const Display = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 70%;
  `;
  const Date = styled.div`
    margin-left: 5px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px;
  `;
  return (
    <body>
      <Container>
        <MenuLateral>
          <Logo>
            Bum<Logo2>p</Logo2>
          </Logo>
          <img
            src="https://cdn-icons-png.flaticon.com/512/219/219986.png"
            alt="ícone de usuario"
          />
          <Home className="home">
            <AiFillHome />
            <Link to="/dashboard">Home</Link>
          </Home>

          <Accordion
            defaultIndex={[0]}
            allowMultiple
            fontSize="10px"
            textAlign={"center"}
            width={"100%"}
          >
            <AccordionItem width={"100%"} color={"#FFF"} fontSize={"20px"}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left" width={"100%"}>
                    Coleções
                  </Box>
                  <AiOutlineSnippets /> <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>item 1</AccordionPanel>
              <AccordionPanel pb={4}>item 2</AccordionPanel>
              <AccordionPanel pb={4}>item 3</AccordionPanel>
              <AccordionPanel pb={4}>item 4</AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Sair>
            <AiOutlineImport />
            Sair
          </Sair>
        </MenuLateral>
        <div className="container-principal">
          <Header>
            <nav className="nav-header">
              <AiOutlineLaptop size={100} />
              <h6> Rotina</h6>
              <RemoveTask>Excluir Coleção</RemoveTask>
            </nav>
            <nav className="nav-header">
              <AddTask>Adicionar +</AddTask>

              <Group>
                <AiOutlineTeam />2
              </Group>
            </nav>
          </Header>

          <NavFilter>
            <ButtonFilter>Data</ButtonFilter>
            <ButtonFilter>Concluídas</ButtonFilter>
            <ButtonFilter>Atrasadas</ButtonFilter>
          </NavFilter>
          <Display>
            {/* filtrar rotinas e jogar dentro dos cards */}
            <Flex
              background={"white"}
              margin={"35px"}
              display={"flex"}
              flexDir={"column"}
              width={"300px"}
              borderRadius={"15px"}
            >
              <Heading
                size="xs"
                padding={"10px"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <label>10/05/2022</label>
                <Button colorScheme="none" color={"black"}>
                  <AiOutlineClose size={"25"} />
                </Button>
              </Heading>
              <Box fontSize={"30"} fontWeight={"500"} padding={"0px 10px"}>
                Criar Projeto de notificação
              </Box>

              <Spacer />
              <ButtonGroup gap="2">
                <Date>
                  <label className="expiration-date">
                    <AiOutlineClockCircle />
                    Mar 26
                  </label>
                  <p className="tag-team">
                    <AiOutlineTeam /> 2
                  </p>
                </Date>
              </ButtonGroup>
            </Flex>
          </Display>
        </div>
      </Container>
    </body>
  );
};
export default Projects;
