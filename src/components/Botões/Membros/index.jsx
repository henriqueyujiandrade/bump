import { BtnMembros } from "../style";

export const BtnMembrosAdd = ({ children, click }) => {
    return (
        <>
            {click ? (
                <BtnMembros onClick={click}>{children}</BtnMembros>
            ) : (
                <BtnMembros>{children}</BtnMembros>
            )}
        </>
    );
};