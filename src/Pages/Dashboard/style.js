import styled from "styled-components";

export const Container = styled.main`

    background-color: #02072F;

    min-height: 100vh;

    main{

    
        .title-welcome {

            text-align: center;
            color: white;
            font-weight: bold;
            font-size: 1.5rem;

            margin-top: 50px;
            margin-bottom: 30px;

            @media (min-width: 1024px) {

                text-align: start;
                padding: 20px 30px;

            }

        }

        .no-task {


            display: flex;

            justify-content: center;
            align-items: center;
            
            flex-direction: column;

            color: white;

            h3 {

                text-align: center;
                margin: 20px 10px;

            }

            .add {

                border: 1px solid white;
                border-radius: 10px;
                padding: 30px 60px;
                opacity: 0.5;
                transition: 0.5s;



                p {

                    font-size: 5rem;
                    font-weight: bold;

                }

                :hover {

                    opacity: 1;
                    cursor: pointer;

                }

            }

        }

        .on-task {

            width: 375px;

            margin: 0 auto;

            display: flex;

            justify-content: center;
            align-items: center;

            flex-direction: column;

            color: white;

            @media (min-width: 768px) {

                width: 500px;

                flex-direction: row;
                flex-wrap: wrap;

            }

            @media (min-width: 768px) {

                width: 800px;

                flex-direction: row;
                flex-wrap: wrap;

            }

            h3 {

                text-align: center;
                margin: 20px 10px;

            }

            .add {

                border: 1px solid white;
                border-radius: 10px;
                padding: 30px 60px;
                opacity: 0.5;
                transition: 0.5s;

                @media (min-width: 768px) {

                    margin: 20px 0;

                }

                p {

                    font-size: 5rem;
                    font-weight: bold;

                }

                :hover {

                    opacity: 1;
                    cursor: pointer;

                }

            }

        }
    }
`