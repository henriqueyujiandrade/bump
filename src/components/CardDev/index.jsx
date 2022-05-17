import { Container } from "./style";

export const CardDev = ({name, link, img}) => {

    return (

        <Container>

            <div className="dev">

                <img className="photo" src={img} alt={name} />
                <p>{name}</p>
                <a href={link}>GitHub</a>

            </div>

        </Container>

    );

}