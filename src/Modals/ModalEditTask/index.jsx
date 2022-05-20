import {
    background,
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react";
import styled from "styled-components";
import React, { useContext } from "react";
import { DivNao, ModTaskEditConte } from "./styled";
import { CardNewTask } from "../../components/Cards/CardNewTask";
import { Close } from "../../components/Close";
import { TasksContext } from "../../Providers/Tasks";

export const ModalEditTask = ({
    setOpenEditTask,
    setOpenAddSubTask,
    modalexcluirST,
    subTaskInfo,
}) => {
    const { tasks, removeTask, subTasks, setTaskId, taskId } =
        useContext(TasksContext);
    const close = () => {
        setOpenEditTask(false);
    };

    const addSubTesk = () => {
        setOpenAddSubTask(true);
        setOpenEditTask(false);
    };

    const { isOpen, onOpen, onClose } = useDisclosure();

    const initialRef = React.useRef();
    const finalRef = React.useRef();

    const Button = styled.button`
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 20.5292px;
        line-height: 43px;
        :hover {
            background-color: transparent;
        }
        background-color: transparent;
        color: yellow;
    `;

    const ModalBody = styled.div`
        padding: 0 0 10px 20px;
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
    `;

    return (
        <ModTaskEditConte>
            <Modal
                isCentered
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen="true"
            >
                <ModalContent boxSizing="border-box" bg={"#B84DEB"}>
                    <ModalFooter display={"flex"} justifyContent={"center"}>
                        <Button onClick={addSubTesk} mr={4}>
                            Adicionar SubTask +
                        </Button>
                        <Close close={close} addTesk="true" />
                    </ModalFooter>

                    {subTasks.length != 0 ? (
                        <>
                            {subTasks.map((elemento) => {
                                return (
                                    <CardNewTask
                                        key={elemento.id}
                                        elemento={elemento}
                                        modalexcluirST={modalexcluirST}
                                    />
                                );
                            })}
                        </>
                    ) : (
                        <>
                            <DivNao>Não Tem</DivNao>
                        </>
                    )}

                    <ModalBody pb={6}>
                        Tarefa do dia {subTaskInfo[0].expirationDate}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </ModTaskEditConte>
    );
};
