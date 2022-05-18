import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { ConteCard, ModMembroConte, ModMembroList } from "./style";

export const ModalMembro = ({ setOpenM, addMembros }) => {
    const close = () => {
        setOpenM(false);
    };

    return (
        <ModMembroConte>
            <ModMembroList>
                <Close close={close} />
                <h1>Membros</h1>
                <ConteCard>
                    <CardMembros statusAdm="true" />
                    <CardMembros />
                    <CardMembros />
                </ConteCard>
                <BtnMembrosAdd click={addMembros}>Adicionar +</BtnMembrosAdd>
            </ModMembroList>
        </ModMembroConte>
    );
};