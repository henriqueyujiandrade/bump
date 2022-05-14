import { ConteClose } from "./styled";
import X from "./X.svg";

export const Close = ({ close }) => {
    return (
        <ConteClose onClick={close}>
            <div>
                <img src={X} />
            </div>
        </ConteClose>
    );
};
