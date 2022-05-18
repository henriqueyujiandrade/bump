import Header  from './../../components/Header/';
import { Container } from './style';
import img3 from './../../assets/2022-03-29_17-43.png'
import { CardDev } from '../../components/CardDev';
import SimpleSlider from '../../components/Caroseul';


const StartPage = () => {

    return (
        <>

            <Header homeDeslogado/>

            <Container>

                <section className="section-carousel">

                    <div className="text">
                        <p>Organize e interaja com seus colegas de <strong>Trabalho</strong>, <strong>Estudo</strong> ou para montar sua <strong>Rotina</strong></p>
                    </div>
                    <SimpleSlider />
                </section>

                <section className="section-devs">

                    <h2 className="epd">Equipe de Desenvolvimento:</h2>

                    <div className="devs">
                        <CardDev name="Valmir" link="https://github.com/" img={img3}/>
                        <CardDev name="Valmir" link="https://github.com/" img={img3}/>
                        <CardDev name="Valmir" link="https://github.com/" img={img3}/>
                        <CardDev name="Valmir" link="https://github.com/" img={img3}/>
                        <CardDev name="Valmir" link="https://github.com/" img={img3}/>
                        <CardDev name="Valmir" link="https://github.com/" img={img3}/>
                    </div>

                </section>

            </Container>
        
        </>
    )
}

export default StartPage