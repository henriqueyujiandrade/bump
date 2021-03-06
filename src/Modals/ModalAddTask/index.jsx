import { useForm } from "react-hook-form";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ModMembroAddConte, ModMembroAddList } from "../ModalMembrosAdd/style";
import { useContext, useState } from "react";
import { TasksContext } from "../../Providers/Tasks";
import { ConteForm } from "./styled";
import getCurrentDate from "../../Pages/Projects/getCurrentDate";

export const ModalAddTask = ({ setOpenAddTask, addTasks, idGrupe }) => {
    const { register, handleSubmit } = useForm();

    const close = () => {
        setOpenAddTask(false);
        /* 
        setOpenMAdd(false);
        setOpenM(true); */
    };
    const { tasks, addTask, removeTask } = useContext(TasksContext);

    const current = new Date();
    const dia = current.getDate();
    const mes = current.getMonth() + 1;
    const ano = current.getFullYear();
    const date = `${dia}-${mes}-${ano}`;
    const [task, setTask] = useState([]);

    const onSubmitFunction = (data) => {
        data.creationDate = date;
        addTask(idGrupe, data);
        setOpenAddTask(false);
    };
    return (
        <>
            {addTasks && (
                <ModMembroAddConte>
                    <ModMembroAddList>
                        <Close close={close} />
                        <h1>Adicionar Task</h1>
                        <ConteForm onSubmit={handleSubmit(onSubmitFunction)}>
                            <Searching register={register} name="description">
                                Descrição
                            </Searching>
                            <Searching
                                register={register}
                                name="expirationDate"
                                type="date"
                            />
                            <BtnMembrosAdd modal type={"submit"}>
                                Adicionar
                            </BtnMembrosAdd>
                        </ConteForm>
                    </ModMembroAddList>
                </ModMembroAddConte>
            )}
        </>
    );
};
