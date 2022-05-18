<<<<<<< HEAD
<<<<<<< HEAD
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ConteCard, ModMembroAddConte, ModMembroAddList } from "./style";
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { DivsaoSearching } from "../../components/Pesquisar/styled";
import { ModMembroAddConte, ModMembroAddList } from "./style";
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <DivsaoSearching />
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
                <DivsaoSearching />
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
                <CardMembros add={true} />
            </ModMembroAddList>
        </ModMembroAddConte>
    );
};
