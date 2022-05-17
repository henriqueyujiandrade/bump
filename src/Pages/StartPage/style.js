import styled from "styled-components";

export const Container = styled.main`

    background-color: #02072F;

    height: 100%;

    .section-carousel {

        p {

            color: #FFFFFF;
            font-size: 1.5rem;
            text-align: center;

            padding-top: 20px;

            margin-bottom: 40px;

        }

        .carousel {

            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }

        @media (min-width: 1024px) {

            height: 100vh;

        }

    }

    .section-devs {

        display: flex;
        flex-direction: column;
        align-items: center;
        
        .epd {

            font-size: 1.25rem;
            color: #FFFFFF;

            margin-bottom: 20px;

        }

        @media (min-width: 768px) {

            

            .devs { 

                padding: 15px;

                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;    

            }

        }

    }

`