import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ModMembroAddConte, ModMembroAddList } from "../ModalMembrosAdd/style";

export const ModalAddTask = ({ setOpenAddTask }) => {
    const close = () => {
        setOpenAddTask(false);
        /* 
        setOpenMAdd(false);
        setOpenM(true); */
    };
    return (
        <ModMembroAddConte>
            <ModMembroAddList>
                <Close close={close} />
                <h1>Adicionar Task</h1>
                <Searching>Descrição</Searching>
                <Searching>Membro</Searching>
                <Searching type="date">Descrição</Searching>
                {/* 
                <CardMembros add={true} />*/}
                <BtnMembrosAdd>Adicionar</BtnMembrosAdd>
            </ModMembroAddList>
        </ModMembroAddConte>
    );
};
