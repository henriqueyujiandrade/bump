import { Modal, ModalContent, ModalFooter } from "@chakra-ui/react";
import React from "react";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ModAddSubTaskConte, TitleH1 } from "./styled";
import { BtnMembrosAdd } from "../../components/Botões/Membros";

export const ModalAddSubTask = ({
    setOpenAddSubTask,
    setOpenEditTask,
    subTask,
}) => {
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
                    <Searching subTask>Descrição</Searching>
                    <Searching subTask>Membro</Searching>
                    <Searching subTask type="date">
                        Descrição
                    </Searching>
                    <BtnMembrosAdd>Adicionar</BtnMembrosAdd>
                </ModalContent>
            </Modal>
        </ModAddSubTaskConte>
    );
};