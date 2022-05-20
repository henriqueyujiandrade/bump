import { ConteCardNew, DivAcao, DivInfo } from "../styled";
import User from "./user.svg";
import XRoxo from "./X.svg";

export const CardNewTask = ({ modalexcluirST, elemento }) => {
    return (
        <ConteCardNew>
            <DivInfo>
                <input type="checkbox" />
                <h3>{elemento.description}</h3>
            </DivInfo>
            <DivAcao>
                <img src={User} />
                <div id={elemento.id} onClick={modalexcluirST}>
                    <img id={elemento.id} src={XRoxo} />
                </div>
            </DivAcao>
        </ConteCardNew>
    );
};
