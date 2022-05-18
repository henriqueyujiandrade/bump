import { BtnMembros } from "../style";

export const BtnMembrosAdd = ({ children, click, type }) => {
    return (
        <>
            {click ? (
                <BtnMembros type={type} onClick={click}>
                    {children}
                </BtnMembros>
            ) : (
                <BtnMembros type={type}>{children}</BtnMembros>
            )}
        </>
    );
};
