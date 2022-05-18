import { useForm } from "react-hook-form";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ModMembroAddConte, ModMembroAddList } from "../ModalMembrosAdd/style";
import { useContext, useState } from "react";
import { TasksContext } from "../../Providers/Tasks";

export const ModalAddTask = ({ setOpenAddTask }) => {
    const close = () => {
        setOpenAddTask(false);
        /* 
        setOpenMAdd(false);
        setOpenM(true); */
    };
    const { tasks, addTask, removeTask } = useContext(TasksContext);
    const current = new Date();
    const date = `${current.getDate()}`;
    const [task, setTask] = useState([]);
    const onSubmitFunction = (e) => {
        e.preventDefault();
        setTask(...task, (task.description = e.target[0].value));
        setTask(...task, (task.members = e.target[1].value));
        setTask(...task, (task.expirationDate = e.target[2].value));
        setTask(...task, (task.creationDate = date));
        setTask(...task, (task.status = "andamento"));
        addTask(task);
    };
    return (
        <ModMembroAddConte>
            <form onSubmit={(e) => onSubmitFunction(e)}>
                <ModMembroAddList>
                    <Close close={close} />
                    <h1>Adicionar Task</h1>
                    <Searching>Descrição</Searching>
                    <Searching>Membro</Searching>
                    <Searching type="date">Descrição</Searching>
                    {/* 
                <CardMembros add={true} />*/}
                    <BtnMembrosAdd>Adicionar</BtnMembrosAdd>
                </ModMembroAddList>{" "}
            </form>
        </ModMembroAddConte>
    );
};
