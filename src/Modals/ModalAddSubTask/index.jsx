import { Modal, ModalContent, ModalFooter } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ConteFormSub, ModAddSubTaskConte, TitleH1 } from "./styled";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { useForm } from "react-hook-form";
import { ConteForm } from "../ModalAddTask/styled";
import { TasksContext } from "../../Providers/Tasks";

export const ModalAddSubTask = ({ setOpenAddSubTask, setOpenEditTask }) => {
    const { register, handleSubmit } = useForm();

    const close = () => {
        setOpenAddSubTask(false);
        setOpenEditTask(true);
    };

    const initialRef = React.useRef();
    const finalRef = React.useRef();
    const { addSubTask, taskId } = useContext(TasksContext);

    const current = new Date();
    const dia = current.getDate();
    const mes = current.getMonth() + 1;
    const ano = current.getFullYear();
    const date = `${dia}-${mes}-${ano}`;

    const onSubmitFunc = (data) => {
        data.creationDate = date;
        console.log(taskId);
        addSubTask(taskId, data);
        setOpenAddSubTask(false);
        setOpenEditTask(true);
    };

    return (
        <ModAddSubTaskConte>
            <Modal
                isCentered
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen="true"
            >
                <ModalContent
                    alignItems={"center"}
                    boxSizing="border-box"
                    bg={"#B84DEB"}
                >
                    <ModalFooter>
                        <Close close={close} addTesk="true" />
                    </ModalFooter>
                    <TitleH1>Adicionar SubTask</TitleH1>
                    <ConteFormSub onSubmit={handleSubmit(onSubmitFunc)}>
                        <Searching
                            register={register}
                            name={"description"}
                            subTask
                        >
                            Descrição
                        </Searching>
                        <Searching
                            register={register}
                            name={"creationDate"}
                            subTask
                            type="date"
                        ></Searching>
                        <BtnMembrosAdd modal>Adicionar</BtnMembrosAdd>
                    </ConteFormSub>
                </ModalContent>
            </Modal>
        </ModAddSubTaskConte>
    );
};
