import { useState } from "react";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { ConteCard, ModMembroConte, ModMembroList } from "./style";

export const ModalMembro = ({
    setOpenM,
    setOpenMT,
    addMembros,
    addMembrosT,
    membrosG,
    membrosT,
}) => {
    const close = () => {
        setOpenM(false);
    };
    const closeT = () => {
        setOpenMT(false);
    };

    return (
        <>
            {membrosG && (
                <ModMembroConte>
                    <ModMembroList>
                        <Close close={close} />
                        <h1>Membros</h1>
                        <ConteCard>
                            <CardMembros statusAdm="true" />
                            <CardMembros />
                            <CardMembros />
                        </ConteCard>
                        <BtnMembrosAdd modal click={addMembros}>
                            Adicionar +
                        </BtnMembrosAdd>
                    </ModMembroList>
                </ModMembroConte>
            )}
            {membrosT && (
                <ModMembroConte>
                    <ModMembroList>
                        <Close close={closeT} />
                        <h1>Membros da Task</h1>
                        <ConteCard>
                            <CardMembros statusAdm="true" />
                            <CardMembros />
                            <CardMembros />
                        </ConteCard>
                        <BtnMembrosAdd modal click={addMembrosT}>
                            Adicionar +
                        </BtnMembrosAdd>
                    </ModMembroList>
                </ModMembroConte>
            )}
        </>
    );
};
