import { Modal, ModalContent, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ConteFormSub, ModAddSubTaskConte, TitleH1 } from "./styled";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { useForm } from "react-hook-form";
import { ConteForm } from "../ModalAddTask/styled";

export const ModalAddSubTask = ({
    setOpenAddSubTask,
    setOpenEditTask,
    subTask,
}) => {
    const { register, handleSubmit } = useForm();

    const close = () => {
        if (subTask) {
            setOpenAddSubTask(false);
            setOpenEditTask(true);
        } else {
            setOpenAddSubTask(false);
        }
    };

    const initialRef = React.useRef();
    const finalRef = React.useRef();

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
                    <TitleH1>Adicionar Task</TitleH1>
                    <ConteFormSub>
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
                        <BtnMembrosAdd>Adicionar</BtnMembrosAdd>
                    </ConteFormSub>
                </ModalContent>
            </Modal>
        </ModAddSubTaskConte>
    );
};
