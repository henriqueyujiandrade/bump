import { useForm } from "react-hook-form";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { ModMembroAddConte, ModMembroAddList } from "../ModalMembrosAdd/style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ConteForm } from "./styled";
import { useLocation } from "react-router-dom";

export const ModalAddTask = ({ setOpenAddTask }) => {
    const close = () => {
        setOpenAddTask(false);
        /* 
        setOpenMAdd(false);
        setOpenM(true); */
    };

    const { register, handleSubmit } = useForm();

    const onSubmitFunc = (data) => {
        console.log(data);
    };

    return (
        <ModMembroAddConte>
            <ModMembroAddList>
                <Close close={close} />
                <h1>Adicionar Task</h1>
                <ConteForm onSubmit={handleSubmit(onSubmitFunc)}>
                    <Searching register={register} name="title">
                        Descrição
                    </Searching>
                    <Searching register={register} name="prazo" type="date">
                        Descrição
                    </Searching>
                    <BtnMembrosAdd type={"submit"}>Adicionar</BtnMembrosAdd>
                </ConteForm>
            </ModMembroAddList>
        </ModMembroAddConte>
    );
};
