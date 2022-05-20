import Header from "./../../components/Header/";
import { Container } from "./style";
import igor from "./../../assets/igor.jpeg";
import maykon from "./../../assets/maykon.jpeg";
import henrique from "./../../assets/henrique.jpg";
import valmir from "./../../assets/valmir.jpg";
import yasmin from "./../../assets/yasmin.png";
import joao from "./../../assets/joao.jpg";
import { CardDev } from "../../components/CardDev";
import SimpleSlider from "../../components/Caroseul";

const StartPage = () => {
    return (
        <>
            <Header homeDeslogado />

            <Container>
                <section className="section-carousel">
                    <div className="text">
                        <p>
                            Organize e interaja com seus colegas de{" "}
                            <strong>Trabalho</strong>, <strong>Estudo</strong>{" "}
                            ou para montar sua <strong>Rotina</strong>
                        </p>
                    </div>
                    <SimpleSlider />
                </section>

                <section className="section-devs">
                    <h2 className="epd">Equipe de Desenvolvimento:</h2>

                    <div className="devs">
                        <CardDev
                            name="Henrique"
                            link="https://github.com/henriqueyujiandrade"
                            img={henrique}
                        />
                        <CardDev
                            name="Igor"
                            link="https://github.com/igor-xavier"
                            img={igor}
                        />
                        <CardDev
                            name="João Victor"
                            link="https://github.com/joaovictorprocopio"
                            img={joao}
                        />
                        <CardDev
                            name="Maykon"
                            link="https://github.com/maykonx22"
                            img={maykon}
                        />
                        <CardDev
                            name="Valmir"
                            link="https://github.com/Valmir-Virtuoso"
                            img={valmir}
                        />
                        <CardDev
                            name="Yasmin"
                            link="https://github.com/YasminAlves16"
                            img={yasmin}
                        />
                    </div>
                </section>
            </Container>
        </>
    );
};

export default StartPage;
