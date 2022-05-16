import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { DivsaoSearching } from "../../components/Pesquisar/styled";
import { ModMembroAddConte, ModMembroAddList } from "./style";

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
                <DivsaoSearching />
                <CardMembros add={true} />
            </ModMembroAddList>
        </ModMembroAddConte>
    );
};
