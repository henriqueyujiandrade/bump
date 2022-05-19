import { useForm } from "react-hook-form";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { DivsaoSearching } from "../../components/Pesquisar/styled";
import { ConteForm, ModMembroAddConte, ModMembroAddList } from "./style";

export const ModalMembroAdd = ({
    setOpenMAdd,
    setOpenMTAdd,
    setOpenMG,
    setOpenMT,
    addMembroG,
    addMembroT,
}) => {
    const { register, handleSubmit } = useForm();

    const close = () => {
        setOpenMAdd(false);
        setOpenMG(true);
    };

    const closeT = () => {
        setOpenMTAdd(false);
        setOpenMT(true);
    };

    const onSubmitFunc = (data) => {
        console.log(data);
    };

    const onSubmitFuncT = (data) => {
        console.log(data);
    };

    return (
        <>
            {addMembroG && (
                <ModMembroAddConte>
                    <ModMembroAddList>
                        <Close close={close} />
                        <h1>Adicionar Membro</h1>
                        <ConteForm onSubmit={handleSubmit(onSubmitFunc)}>
                            <Searching register={register} name={"email"}>
                                Digite um email
                            </Searching>
                            <BtnMembrosAdd>Procurar</BtnMembrosAdd>
                        </ConteForm>

                        <DivsaoSearching />

                        <CardMembros add={true} />
                    </ModMembroAddList>
                </ModMembroAddConte>
            )}
            {addMembroT && (
                <ModMembroAddConte>
                    <ModMembroAddList>
                        <Close close={closeT} />
                        <h1>Adicionar Membro Task</h1>
                        <ConteForm onSubmit={handleSubmit(onSubmitFuncT)}>
                            <Searching register={register} name={"email"}>
                                Digite um email
                            </Searching>
                            <BtnMembrosAdd modal>Procurar</BtnMembrosAdd>
                        </ConteForm>

                        <DivsaoSearching />

                        <CardMembros add={true} />
                    </ModMembroAddList>
                </ModMembroAddConte>
            )}
        </>
    );
};
