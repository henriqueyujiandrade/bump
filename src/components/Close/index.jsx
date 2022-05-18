<<<<<<< HEAD
import { ConteClose } from "./styled";
import X from "./X.svg";

export const Close = ({ close }) => {
    return (
        <ConteClose onClick={close}>
            <div>
                <img src={X} />
            </div>
        </ConteClose>
=======
import { ConteClose, ConteCloseTask } from "./styled";
import X from "./X.svg";

export const Close = ({ close, addTesk }) => {
    return (
        <>
            {addTesk ? (
                <ConteCloseTask onClick={close}>
                    <div>
                        <img src={X} />
                    </div>
                </ConteCloseTask>
            ) : (
                <ConteClose onClick={close}>
                    <div>
                        <img src={X} />
                    </div>
                </ConteClose>
            )}
        </>
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    );
};
