import { useHistory } from "react-router-dom";
import { ListContainer } from "./style";

export const CardGroup = ({colection}) => {

    const history = useHistory();

    return (

        <ListContainer>

                    <li onClick={() => history.push(`/dashboard/${colection.id}`)}>
                        <div>

                            <p>Membros: {colection.membros.length}</p>

                        </div>

                        <p className="card-name">{colection.name}</p>
                
                    </li>         

        </ListContainer>

    );

}