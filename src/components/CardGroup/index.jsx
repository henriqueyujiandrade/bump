import { useHistory } from "react-router-dom";
import { ListContainer } from "./style";
import { useContext } from 'react';
import { TasksContext } from "../../Providers/Tasks";

export const CardGroup = ({colection}) => {
    const {setGroupId, setTasks } = useContext(TasksContext);
    const history = useHistory();
    

    return (

        <ListContainer>

                    <li onClick={() => { setTasks([])
                        setGroupId(colection.id)
                        history.push(`/dashboard/${colection.id}`) 
                   }}>
                        <div>

                            <p>Membros: {colection.membros.length}</p>

                        </div>

                        <p className="card-name">{colection.name}</p>
                
                    </li>         

        </ListContainer>

    );

}