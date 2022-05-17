import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ConteCard, ModMembroAddConte, ModMembroAddList } from "./style";

export const ModalMembroAdd = ({ setOpenMAdd, setOpenM }) => {
    const close = () => {
        setOpenMAdd(false);
        setOpenM(true);
    };
    return (
        <ModMembroAddConte>
            <ModMembroAddList>
                <Close close={close} />
                <h1>Adicionar Membro</h1>
                <Searching Label="Email">Digite um email</Searching>
                <CardMembros add={true} />
            </ModMembroAddList>
        </ModMembroAddConte>
    );
};
