import { useHistory } from "react-router-dom";
import { ListContainer } from "./style";
import { useContext } from "react";
import { TasksContext } from "../../Providers/Tasks";
import { MemberContext } from "../../Providers/Member";
import { ChatContext } from "../../Providers/Chat";

export const CardGroup = ({ colection }) => {
    const { setGroupId, setTasks } = useContext(TasksContext);
    const { setGpId } = useContext(MemberContext);
    const {setIdChat} = useContext(ChatContext)
    const history = useHistory();

    return (
        <ListContainer>
            <li
                onClick={() => {
                    setTasks([]);
                    window.localStorage.setItem(
                        "@bump:groupid",
                        JSON.stringify(colection.id)
                    );
                    setGroupId(colection.id);
                    setGpId(colection.id);
                    setIdChat(colection.id);
                    history.push(`/dashboard/${colection.id}`);
                }}
            >
                <div>
                    <p>Membros: {colection.membros.length}</p>
                </div>

                <p className="card-name">{colection.name}</p>
            </li>
        </ListContainer>
    );
};
