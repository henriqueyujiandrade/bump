import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { BtnMembrosAdd } from "../../components/Botões/Membros";
import { CardMembros } from "../../components/Cards/CardMembros";
import { Close } from "../../components/Close";
import { Searching } from "../../components/Pesquisar/AddMembros";
import { DivsaoSearching } from "../../components/Pesquisar/styled";
import { MemberContext } from "../../Providers/Member";
import {
    ConteForm,
    DivNao,
    ModMembroAddConte,
    ModMembroAddList,
} from "./style";

export const ModalMembroAdd = ({
    setOpenMAdd,
    setOpenMTAdd,
    setOpenMG,
    setOpenMT,
    addMembroG,
    addMembroT,
}) => {
    const param = useParams();
    const idGroup = param.id;
    const { register, handleSubmit } = useForm();
    const [newMembro, setNewMembro] = useState("");
    const [user, setUser] = useState("");

    const { users, addMember } = useContext(MemberContext);

    const close = () => {
        setOpenMAdd(false);
        setOpenMG(true);
    };

    const closeT = () => {
        setOpenMTAdd(false);
        setOpenMT(true);
    };

    const onSubmitFunc = (data) => {
        setUser(
            users.filter((user) => {
                if (user.email == data.email) {
                    setNewMembro(data);
                    return users;
                } else {
                    return false;
                }
            })
        );
    };

    const addMemberG = () => {
        console.log(newMembro);
        addMember(idGroup, newMembro);
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
                            <BtnMembrosAdd modal type="submit">
                                Procurar
                            </BtnMembrosAdd>
                        </ConteForm>

                        <DivsaoSearching />
                        {user && (
                            <>
                                {user.length != 0 ? (
                                    <>
                                        {user.map((elemento) => {
                                            return (
                                                <CardMembros
                                                    addMemberG={addMemberG}
                                                    add
                                                    elemento={elemento}
                                                    key={elemento.id}
                                                />
                                            );
                                        })}
                                    </>
                                ) : (
                                    <>
                                        <DivNao>Não Encontrado</DivNao>
                                    </>
                                )}
                            </>
                        )}
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
