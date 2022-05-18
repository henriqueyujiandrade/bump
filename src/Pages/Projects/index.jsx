import { useContext } from "react";
import { TasksContext } from "../../Providers/Tasks";
import {
    Container,
    Header,
    AddTask,
    Body,
    RemoveTask,
    Group,
    NavFilter,
    ButtonFilter,
    Display,
    Date,
    TagTeam,
    Nav,
    ContainerPrincipal,
    Label,
    LabelExp,
} from "./style";
// --- modal ---
import { useState } from "react";
import { ModalMembro } from "../../Modals/ModalMembros";
import { ModalMembroAdd } from "../../Modals/ModalMembrosAdd";
//-- modal --

import {
    AiOutlineLaptop,
    AiOutlineTeam,
    AiOutlineClockCircle,
    //AiOutlineWechat,
    AiOutlineEdit,
} from "react-icons/ai";
import {
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

// -- sideBar --
import SideBar from "../../components/SideBar/SideBar";
import getCurrentDate from "./getCurrentDate";
import { CardNewTask } from "../../components/Cards/CardNewTask";

const Projects = () => {
    const [openM, setOpenM] = useState(false);
    const [openMAdd, setOpenMAdd] = useState(false);
    const [openAddTask, setOpenAddTask] = useState(false);
    const [openEditTask, setOpenEditTask] = useState(false);
    const [openAddSubTask, setOpenAddSubTask] = useState(false);

    const editTesk = (target) => {
        setOpenEditTask(true);
    };

    const none = "none";
    const flex = "flex";
    const [openSideBar, setOpenSideBar] = useState(none);

    const addMembros = () => {
        setOpenMAdd(true);
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
    const { tasks, removeTask } = useContext(TasksContext);
    const [showTasks, setShowTasks] = useState(tasks);

    function clickClose(target) {
        removeTask(target);
        setShowTasks(tasks);
    }

    function filtrar(event) {
        if (event === "Todas") return setShowTasks(tasks);
        if (event === "Concluídas") {
            setShowTasks(tasks.filter((tasks) => tasks.status === "concluida"));
        }

        if (event === "Atrasadas") {
            setShowTasks([]);
            const filtradas = [];
            for (let i = 0; i < tasks.length; i++) {
                const yrTask =
                    tasks[i].expirationDate[6] +
                    tasks[i].expirationDate[7] +
                    tasks[i].expirationDate[8] +
                    tasks[i].expirationDate[9];
                const mTask =
                    tasks[i].expirationDate[3] + tasks[i].expirationDate[4];
                const dTask =
                    tasks[i].expirationDate[0] + tasks[i].expirationDate[1];

                if (
                    parseInt(yrTask) < getCurrentDate().year ||
                    (parseInt(yrTask) <= getCurrentDate().year &&
                        parseInt(mTask) < getCurrentDate().month) ||
                    (parseInt(yrTask) <= getCurrentDate().year &&
                        parseInt(mTask) <= getCurrentDate().month &&
                        parseInt(dTask) < getCurrentDate().date)
                ) {
                    filtradas.push(tasks[i]);
                }
            }
            setShowTasks(filtradas);
        }
    }
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
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Data
                        </ButtonFilter>
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Concluídas
                        </ButtonFilter>
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Atrasadas
                        </ButtonFilter>
                        <ButtonFilter
                            onClick={(event) => filtrar(event.target.innerText)}
                        >
                            Todas
                        </ButtonFilter>
                    </NavFilter>
                    <Display>
                        {showTasks.map((results) => {
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
                                        <Label
                                            href=""
                                            onClick={() =>
                                                clickClose(results.id)
                                            }
                                        >
                                            X
                                        </Label>
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
                                            <AiOutlineEdit
                                                size="40"
                                                onClick={() =>
                                                    editTesk(results.id)
                                                }
                                            />
                                            <TagTeam
                                                className="tag-team"
                                                onClick={addMembros}
                                            >
                                                <AiOutlineTeam />
                                                {results.members.length}
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
