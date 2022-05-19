import { ListContainer } from "./style";

export const CardGroup = ({colection}) => {

    return (

        <ListContainer>

                    <li>
                        <div>

                            <p>Membros: {colection.members.length}</p>

                        </div>

                        <p className="card-name">{colection.name}</p>
                        <p className="card-tasks">-/- concluidas</p>
                    </li>         

        </ListContainer>

    );

}