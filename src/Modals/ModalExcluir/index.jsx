import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { GroupContext } from "../../Providers/Group";
import { TasksContext } from "../../Providers/Tasks";
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
  openExcluirST,
  setOpenExcluirG,
  setOpenExcluirT,
  setOpenExcluirST,
  setOpenEditTask,
  openExcluirT,
}) => {
  const { tasks, removeSubTask, removeTask, subTasks, setTaskId, taskId } =
    useContext(TasksContext);
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

  const excluirSubTask = () => {
    removeSubTask(openExcluirST);
    setOpenExcluirST(false);
    setOpenEditTask(true);
  };
  const history = useHistory();

  const param = useParams();
  const idGroup = param.id;
  const { removeGroup } = useContext(GroupContext);

  console.log("Id group", idGroup);
  console.log("Id task", openExcluirT);

  return (
    <>
      {excluirG && (
        <ModExcluirConte>
          <ModExcluir>
            <Close close={close} />
            <h1>Deseja excluir esse Grupo?</h1>
            <div>
              <BtnMembrosAdd
                excluir
                click={() => {
                  removeGroup(idGroup);
                  close();
                  history.push("/dashboard/");
                }} /* click={addMembros} */
              >
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
              <BtnMembrosAdd
                excluir
                click={() => {
                  removeTask(openExcluirT);
                  closeT();
                }} /* click={addMembros} */
              >
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
              <BtnMembrosAdd excluir click={excluirSubTask}>
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
