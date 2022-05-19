import Slider from "react-slick/lib/slider";
import { Container } from "./style";
import img1 from "./../../assets/2022-03-28_20-15.png";
import img2 from "./../../assets/2022-03-28_20-16.png";
import img3 from "./../../assets/2022-03-29_17-43.png";

export default function SimpleSlider() {
    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Container>
            <Slider {...settings} className="teste" >
                <div>
                    <img src={img1} alt="img1" />
                </div>
                <div>
                    <img src={img2} alt="img2" />
                </div>
                <div>
                    <img src={img3} alt="img3" />
                </div>
            </Slider>
        </Container>
    );
}
