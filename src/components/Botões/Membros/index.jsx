import { BtnMembros, BtnMembrosC, BtnMembrosE } from "../style";

export const BtnMembrosAdd = ({
    children,
    click,
    type,
    excluir,
    cancelar,
    modal,
}) => {
    return (
        <>
            {excluir && (
                <>
                    {click ? (
                        <BtnMembrosE type={type} onClick={click}>
                            {children}
                        </BtnMembrosE>
                    ) : (
                        <BtnMembrosE type={type}>{children}</BtnMembrosE>
                    )}
                </>
            )}

            {cancelar && (
                <>
                    {click ? (
                        <BtnMembrosC type={type} onClick={click}>
                            {children}
                        </BtnMembrosC>
                    ) : (
                        <BtnMembrosC type={type}>{children}</BtnMembrosC>
                    )}
                </>
            )}
            {modal && (
                <>
                    {click ? (
                        <BtnMembros type={type} onClick={click}>
                            {children}
                        </BtnMembros>
                    ) : (
                        <BtnMembros type={type}>{children}</BtnMembros>
                    )}
                </>
            )}
        </>
    );
};
