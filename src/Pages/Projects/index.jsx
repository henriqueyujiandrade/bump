import { useContext } from "react";
import { TasksContext } from "../../Providers/Tasks";
import styled from "styled-components";
import { Link } from "react-router-dom";
// --- modal ---
import { useState } from "react";
import { ModalMembro } from "../../Modals/ModalMembros";
import { ModalMembroAdd } from "../../Modals/ModalMembrosAdd";
//-- modal --
import {
    AiFillHome,
    AiOutlineImport,
    AiOutlineSnippets,
    AiOutlineLaptop,
    AiOutlineTeam,
    AiOutlineClockCircle,
    //AiOutlineWechat,
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
import { ModalAddTask } from "../../Modals/ModalAddTask";
import { ModalEditTask } from "../../Modals/ModalEditTask";
import { ModalAddSubTask } from "../../Modals/ModalAddSubTask";

const Projects = () => {
    const [openM, setOpenM] = useState(false);
    const [openMAdd, setOpenMAdd] = useState(false);
    const [openAddTask, setOpenAddTask] = useState(false);
    const [openEditTask, setOpenEditTask] = useState(false);
    const [openAddSubTask, setOpenAddSubTask] = useState(false);

    const editTesk = () => {
        setOpenEditTask(true);
    };

    const addMembros = () => {
        setOpenMAdd(true);
        setOpenM(false);
    };
    const checkMembers = () => {
        setOpenM(true);
        setOpenMAdd(false);
    };
    const openAddTaskFunc = () => {
        /* setOpenM(true); */
        setOpenAddTask(true);
    };

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
    const Body = styled.body`
        font-family: "Inter", sans-serif;
    `;
    const Icone = styled.img`
        width: 90%;
        margin-top: 30px;
        margin-bottom: 30px;
    `;
    const TagTeam = styled.button`
        background-color: #b84deb;
        margin: 2px;
        color: #fff;
        border-radius: 15px;
        width: fit-content;
        padding: 10px;
    `;
    const Nav = styled.nav`
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
    const ContainerPrincipal = styled.div`
        width: 100%;
    `;
    const Label = styled.label`
        color: rgb(135, 130, 130);
        display: flex;
        align-items: center;
        width: 35px;
        padding: 2px;
    `;
    const LabelExp = styled.label`
        background-color: #84e439;
        border-radius: 15px;
        width: fit-content;
        padding: 10px;
        display: flex;
        align-items: center;
    `;
    return (
        <Body>
            <>
                {openAddSubTask && (
                    <ModalAddSubTask
                        subTask
                        setOpenEditTask={setOpenEditTask}
                        setOpenAddSubTask={setOpenAddSubTask}
                    />
                )}
                {openEditTask && (
                    <ModalEditTask
                        setOpenAddSubTask={setOpenAddSubTask}
                        setOpenEditTask={setOpenEditTask}
                    />
                )}
                {openAddTask && (
                    <ModalAddTask setOpenAddTask={setOpenAddTask} />
                )}
                {openMAdd && (
                    <ModalMembroAdd
                        setOpenM={setOpenM}
                        setOpenMAdd={setOpenMAdd}
                    />
                )}
                {openM && (
                    <ModalMembro addMembros={addMembros} setOpenM={setOpenM} />
                )}
            </>
            <Container>
                <MenuLateral>
                    <Logo>
                        Bum<Logo2>p</Logo2>
                    </Logo>
                    <Icone
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
                        <AccordionItem
                            width={"100%"}
                            color={"#FFF"}
                            fontSize={"20px"}
                        >
                            <h2>
                                <AccordionButton>
                                    <Box
                                        flex="1"
                                        textAlign="left"
                                        width={"100%"}
                                    >
                                        Coleções
                                    </Box>
                                    <AiOutlineSnippets /> <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>Kenzie</AccordionPanel>
                            <AccordionPanel pb={4}>Escola</AccordionPanel>
                            <AccordionPanel pb={4}>
                                Tarefas domésticas
                            </AccordionPanel>
                            <AccordionPanel pb={4}>Rotina</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <Sair>
                        <AiOutlineImport />
                        Sair
                    </Sair>
                </MenuLateral>
                <ContainerPrincipal className="container-principal">
                    <Header>
                        <Nav className="nav-header">
                            <AiOutlineLaptop size={100} />
                            <h6> Rotina</h6>
                            <RemoveTask>Excluir Coleção</RemoveTask>
                        </Nav>
                        <Nav className="nav-header">
                            <AddTask onClick={openAddTaskFunc}>
                                Adicionar +
                            </AddTask>

                            <Group onClick={checkMembers}>
                                <AiOutlineTeam />2
                            </Group>
                        </Nav>
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
                                onClick={editTesk}
                                size="xs"
                                padding={"10px"}
                                display={"flex"}
                                justifyContent={"space-between"}
                            >
                                <Label>10/05/2022</Label>
                                <Button
                                    position="static"
                                    colorScheme="none"
                                    color={"black"}
                                >
                                    <AiOutlineClose size={"25"} />
                                </Button>
                            </Heading>
                            <Box
                                onClick={editTesk}
                                fontSize={"30"}
                                fontWeight={"500"}
                                padding={"0px 10px"}
                            >
                                Criar Projeto de notificação
                            </Box>

                            <Spacer />
                            <ButtonGroup gap="2">
                                <Date>
                                    <LabelExp className="expiration-date">
                                        <AiOutlineClockCircle />
                                        Mar 26
                                    </LabelExp>
                                    <TagTeam
                                        className="tag-team"
                                        onClick={addMembros}
                                    >
                                        <AiOutlineTeam />
                                    </TagTeam>
                                </Date>
                            </ButtonGroup>
                        </Flex>
                    </Display>
                </ContainerPrincipal>
            </Container>
        </Body>
    );
};
export default Projects;
