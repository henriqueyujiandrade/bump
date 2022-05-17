import Header  from './../../components/Header/';
import CarouselComponent from './carousel';
import { Container } from './style';
import img3 from './../../assets/2022-03-29_17-43.png'
import { CardDev } from '../../components/CardDev';


const StartPage = () => {

    return (
        <>

            <Header homeDeslogado/>

            <Container>

                <section className="section-carousel">

                    <p>Organize e interaja com seus colegas de trabalho, estudo ou para montar sua rotina</p>
                    <div className="carousel">
                        <CarouselComponent />
                    </div>

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