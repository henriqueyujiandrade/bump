import { useContext, useState } from "react";
import { CardGroup } from "../../components/CardGroup";
import { ModalAddGroup } from "../../Modals/ModalAddGroup";
import { GroupContext } from "../../Providers/Group";
import Header from "./../../components/Header";
import { Container } from "./style";

const Dashboard = () => {
    const { group } = useContext(GroupContext);
    const [isOpen, setIsOpen] = useState(false);

    const user = JSON.parse(localStorage.getItem("@bump:myInfo"));

    return (
        <Container>
            <Header homeLogado />
            <main>
                {isOpen && <ModalAddGroup setIsOpen={setIsOpen} />}

                <h2 className="title-welcome">Bem vindo {user.name}!</h2>
                {group.length === 0 ? (
                    <section className="no-task">
                        <h3>
                            Não possui nenhuma coleção? Crie uma clicando no
                            botão abaixo
                        </h3>
                        <button className="add" onClick={() => setIsOpen(true)}>
                            <p>+</p>
                        </button>
                    </section>
                ) : (
                    <section className="on-task">
                        {group.map((item, index) => {
                            return <CardGroup key={index} colection={item} />;
                        })}

                        <button className="add" onClick={() => setIsOpen(true)}>
                            <p>+</p>
                        </button>
                    </section>
                )}
            </main>
        </Container>
    );
};

export default Dashboard;
