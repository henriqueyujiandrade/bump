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
    );
};
