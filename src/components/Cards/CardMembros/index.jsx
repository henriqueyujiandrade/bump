import { CardMembrosAcao, CardMembrosConte, CardMembrosInfo } from "../styled";
import User from "./user.svg";
import Fire from "./fire.svg";
import FireB from "./fire_black.svg";
import X from "./X.svg";
import XRed from "./X_red.svg";
import Aceitar from "./aceitar.svg";

export const CardMembros = ({ statusAdm, add, elemento, addMemberG }) => {
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
                        <div>
                            <img src={X} />
                        </div>
                    </CardMembrosAcao>
                </CardMembrosConte>
            )}
        </>
    );
};
