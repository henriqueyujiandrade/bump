import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GroupContext } from "../../Providers/Group";

export const ModalAddGroup = ({setIsOpen}) => {

    const { register, handleSubmit, formState: {errors} } = useForm();
    const { addGroup } = useContext(GroupContext);

    const onSubmit = (data) => {

        addGroup(data);

    }

    return (

        <>
        
            <form onSubmit={handleSubmit(onSubmit)}>

                <input type="text" {...register('name')}/>
                <input type="text" {...register('description')}/>
                <button>Enviar</button>
        

            </form>
        
        </>

    );

}