import { CardMembrosAcao, CardMembrosConte, CardMembrosInfo } from "../styled";
import User from "./user.svg";
import Fire from "./fire.svg";
import FireB from "./fire_black.svg";
import X from "./X.svg";
import XRed from "./X_red.svg";
import Aceitar from "./aceitar.svg";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MemberContext } from "../../../Providers/Member";

export const CardMembros = ({ statusAdm, add, elemento, addMemberG }) => {
    const param = useParams();
    const idGroup = param.id;

    const { removeMember } = useContext(MemberContext);

    const excluirMembro = (e) => {
        removeMember(idGroup, e.target.id);
    };

    return (
        <>
            {add ? (
                <CardMembrosConte>
                    <CardMembrosInfo>
                        <img src={User} />
                        <h1>{elemento.email}</h1>
                    </CardMembrosInfo>
                    <CardMembrosAcao>
                        <img src={XRed} />
                        <img onClick={addMemberG} src={Aceitar} />
                    </CardMembrosAcao>
                </CardMembrosConte>
            ) : (
                <CardMembrosConte>
                    <CardMembrosInfo>
                        <img src={User} />
                        <h1>{elemento.email}</h1>
                    </CardMembrosInfo>
                    <CardMembrosAcao>
                        {statusAdm ? <img src={Fire} /> : <img src={FireB} />}
                        <div onClick={excluirMembro} id={elemento.id}>
                            <img id={elemento.id} src={X} />
                        </div>
                    </CardMembrosAcao>
                </CardMembrosConte>
            )}
        </>
    );
};
