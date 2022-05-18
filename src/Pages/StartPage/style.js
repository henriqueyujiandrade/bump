import styled from "styled-components";

export const Container = styled.main`

    background-color: #02072F;

    min-height: 100vh;

    .section-carousel {

        p {

            color: #FFFFFF;
            font-size: 1.5rem;
            text-align: center;

            padding-top: 20px;

            margin-bottom: 40px;

        }

        @media (min-width: 1920px) {

            display: flex;
            align-items: center;
            justify-content: space-around;

            padding: 50px;

            .text {

                width: 500px;
                

                p {

                    font-size: 2.5rem;
                    text-align: start;

                }

            }

            

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