import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GroupContext } from "../../Providers/Group";
import { Container } from "./style";

export const ModalAddGroup = ({setIsOpen}) => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const { addGroup } = useContext(GroupContext);

    const onSubmit = (data) => {

        addGroup(data);

    }

    return (

        <Container>

            <button className="btn-close" onClick={() => setIsOpen(false)}><i class='bx bx-x'></i></button>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" placeholder="Nome" {...register('name')}/>
                <input type="text" placeholder="Descrição" {...register('description')}/>
                <button className="btn-create">Criar grupo</button>
        
            </form>
        
        </Container>

    );

}