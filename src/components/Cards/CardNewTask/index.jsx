import { ConteCardNew, DivAcao, DivInfo } from "../styled";
import User from "./user.svg";
import XRoxo from "./X.svg";

export const CardNewTask = ({ modalexcluirST }) => {
    return (
        <ConteCardNew>
            <DivInfo>
                <input type="checkbox" />
                <h3>Fazer o CRA</h3>
            </DivInfo>
            <DivAcao>
                <img src={User} />
                <div onClick={modalexcluirST}>
                    <img src={XRoxo} />
                </div>
            </DivAcao>
        </ConteCardNew>
    );
};
