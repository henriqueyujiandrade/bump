import { useContext } from "react";
import { TasksContext } from "../../Providers/Tasks";
import {
    Container,
    Home,
    MenuLateral,
    Logo,
    Logo2,
    Sair,
    Header,
    AddTask,
    RemoveTask,
    Group,
    NavFilter,
    ButtonFilter,
    Display,
    Date,
    Body,
    Icone,
    TagTeam,
    Nav,
    ContainerPrincipal,
    Label,
    LabelExp,
} from "./style";
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
// -- sideBar --
import SideBar from "../../components/SideBar/SideBar";

const Projects = () => {
    const [openM, setOpenM] = useState(false);
    const [openMAdd, setOpenMAdd] = useState(false);
    const [openAddTask, setOpenAddTask] = useState(false);

    const none = "none";
    const flex = "flex";
    const [openSideBar, setOpenSideBar] = useState(none);

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

    const handleOpenSideBar = () => {
        if (openSideBar === none) {
            setOpenSideBar(flex);
        } else {
            setOpenSideBar(none);
        }
    };

    const { tasks, addTask, removeTask } = useContext(TasksContext);

    function clickClose(target) {
        removeTask(target);
    }
    return (
        <Body>
            <>
                {openAddTask && (
                    <ModalAddTask
                        setOpenAddTask={setOpenAddTask} /* 
                        setOpenMAdd={setOpenMAdd} */
                    />
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
                <SideBar
                    setShowSideBar={setOpenSideBar}
                    showSideBar={openSideBar}
                />
                <ContainerPrincipal className="container-principal">
                    <Button
                        onClick={handleOpenSideBar}
                        display={["flex", "flex", "none"]}
                    >
                        Menu
                    </Button>
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
                        {tasks.map((results) => {
                            return (
                                <Flex
                                    background={"white"}
                                    margin={"35px"}
                                    display={"flex"}
                                    flexDir={"column"}
                                    width={"300px"}
                                    borderRadius={"15px"}
                                    id={results.id}
                                >
                                    <Heading
                                        size="xs"
                                        padding={"10px"}
                                        display={"flex"}
                                        justifyContent={"space-between"}
                                    >
                                        <Label>{results.creationDate}</Label>
                                        <Button
                                            colorScheme="none"
                                            color={"black"}
                                            onClick={() =>
                                                clickClose(results.id)
                                            }
                                        >
                                            <AiOutlineClose size={"25"} />
                                        </Button>
                                    </Heading>
                                    <Box
                                        fontSize={"30"}
                                        fontWeight={"500"}
                                        padding={"0px 10px"}
                                    >
                                        {results.description}
                                    </Box>

                                    <Spacer />
                                    <ButtonGroup gap="2">
                                        <Date>
                                            <LabelExp className="expiration-date">
                                                <AiOutlineClockCircle />
                                                {results.expirationDate}
                                            </LabelExp>
                                            <TagTeam
                                                className="tag-team"
                                                onClick={addMembros}
                                            >
                                                <AiOutlineTeam />
                                                {results.group.length}
                                            </TagTeam>
                                        </Date>
                                    </ButtonGroup>
                                </Flex>
                            );
                        })}
                    </Display>
                </ContainerPrincipal>
            </Container>
        </Body>
    );
};
export default Projects;
