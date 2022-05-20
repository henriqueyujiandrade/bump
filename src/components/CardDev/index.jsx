import { Container } from "./style";

export const CardDev = ({name, link, img}) => {

    return (

        <Container>

            <div className="dev">

                <img className="photo" src={img} alt={name} />
                <p>{name}</p>
                <a href={link} target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i> GitHub</a>

            </div>

        </Container>

    );

};