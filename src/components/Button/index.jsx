import { ButtonStyled } from "./style";

const ButtonSubmit = ({handleSubmit, children, size}) => {

    return (

        <div>

            <ButtonStyled onSubmit={handleSubmit} size={size}>{children}</ButtonStyled>

        </div>

    );

}

export default ButtonSubmit;