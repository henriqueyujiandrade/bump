<<<<<<< HEAD
<<<<<<< HEAD
import { ConteSearching, DivsaoSearching } from "../styled";

export const Searching = ({ children }) => {
    return (
        <ConteSearching>
            <input placeholder={children} />
            <DivsaoSearching />
        </ConteSearching>
=======
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
import { ConteSearching, ConteSearchingSub } from "../styled";

export const Searching = ({ children, type, subTask }) => {
    return (
        <>
            {subTask ? (
                <ConteSearchingSub>
                    <input type={type} placeholder={children} />
                </ConteSearchingSub>
            ) : (
                <ConteSearching>
                    <input type={type} placeholder={children} />
                </ConteSearching>
            )}
        </>
<<<<<<< HEAD
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
=======
>>>>>>> eca2488c70fe51d09de1780c557d161029ca7d84
    );
};
