import { useState } from "react";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import {
    ConteCard,
    ModExcluir,
    ModExcluirConte,
    ModMembroConte,
    ModMembroList,
} from "./style";

export const ModalExcluir = ({
    excluirG,
    excluirT,
    excluirST,
    setOpenExcluirG,
    setOpenExcluirT,
    setOpenExcluirST,
    setOpenEditTask,
}) => {
    const close = () => {
        setOpenExcluirG(false);
    };
    const closeT = () => {
        setOpenExcluirT(false);
    };
    const closeST = () => {
        setOpenExcluirST(false);
        setOpenEditTask(true);
    };

    return (
        <>
            {excluirG && (
                <ModExcluirConte>
                    <ModExcluir>
                        <Close close={close} />
                        <h1>Deseja excluir esse Grupo?</h1>
                        <div>
                            <BtnMembrosAdd excluir /* click={addMembros} */>
                                Excluir
                            </BtnMembrosAdd>
                            <BtnMembrosAdd cancelar click={close}>
                                Cancelar
                            </BtnMembrosAdd>
                        </div>
                    </ModExcluir>
                </ModExcluirConte>
            )}
            {excluirT && (
                <ModExcluirConte>
                    <ModExcluir>
                        <Close close={closeT} />
                        <h1>Deseja excluir essa Task?</h1>
                        <div>
                            <BtnMembrosAdd excluir /* click={addMembros} */>
                                Excluir
                            </BtnMembrosAdd>
                            <BtnMembrosAdd cancelar click={closeT}>
                                Cancelar
                            </BtnMembrosAdd>
                        </div>
                    </ModExcluir>
                </ModExcluirConte>
            )}
            {excluirST && (
                <ModExcluirConte>
                    <ModExcluir>
                        <Close close={closeST} />
                        <h1>Deseja excluir essa SubTask?</h1>
                        <div>
                            <BtnMembrosAdd excluir /* click={addMembros} */>
                                Excluir
                            </BtnMembrosAdd>
                            <BtnMembrosAdd cancelar click={closeST}>
                                Cancelar
                            </BtnMembrosAdd>
                        </div>
                    </ModExcluir>
                </ModExcluirConte>
            )}
        </>
    );
};
