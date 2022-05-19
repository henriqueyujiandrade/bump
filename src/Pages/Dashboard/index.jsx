import { useContext, useEffect } from 'react';
import { CardGroup } from '../../components/CardGroup';
import { GroupContext } from '../../Providers/Group';
import Header  from './../../components/Header'
import { Container } from './style';

const Dashboard = () => {

    const { group} = useContext(GroupContext);
    

    return (
        <Container>
            <Header homeLogado/>

            <main>   
                <h2 className="title-welcome">Bem vindo Valmir !</h2>
                {
                    group.length === 0 ? (

                        <section className="no-task">
                        <h3>Não possui nenhuma coleção? Crie uma clicando no botão abaixo</h3>
                        <button className="add">
                            <p>+</p>
                        </button>
                        </section>

                    ) : (
                        <section className="on-task">

                            {

                                group.map((item, index) => {

                                    return <CardGroup key={index} colection={item}/>

                                })

                            }

                            <button className="add">
                                <p>+</p>
                            </button>
                        </section>
                    )
                }
            </main>

        </Container>
    );
};

export default Dashboard;
