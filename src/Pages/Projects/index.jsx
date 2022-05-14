import { useState } from "react";
import { ModalMembro } from "../../Modals/ModalMembros";
import { ModalMembroAdd } from "../../Modals/ModalMembrosAdd";

const Projects = () => {
    const [openM, setOpenM] = useState(false);
    const [openMAdd, setOpenMAdd] = useState(false);

    const addMembros = () => {
        setOpenMAdd(true);
        setOpenM(false);
    };

    return (
        <>
            {openMAdd && (
                <ModalMembroAdd setOpenM={setOpenM} setOpenMAdd={setOpenMAdd} />
            )}
            {openM && (
                <ModalMembro addMembros={addMembros} setOpenM={setOpenM} />
            )}

            <h2>Projects</h2>
        </>
    );
};

export default Projects;
