import { ConteSearching, ConteSearchingSub } from "../styled";

export const Searching = ({ children, type, subTask, register, name }) => {
    return (
        <>
            {subTask ? (
                <ConteSearchingSub>
                    <input
                        {...register(name)}
                        type={type}
                        placeholder={children}
                    />
                </ConteSearchingSub>
            ) : (
                <ConteSearching>
                    <input
                        {...register(name)}
                        type={type}
                        placeholder={children}
                    />
                </ConteSearching>
            )}
        </>
    );
};
