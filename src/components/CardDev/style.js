import styled from "styled-components";

export const Container = styled.div`  

    .dev {  

        display: flex;
        flex-direction: column;
        align-items: center;

        .photo {

            width: 162px;
            height: 162px;
            border-radius: 50%;

            margin-bottom: 10px;

        }

        p {

            font-size: 1.25rem;
            color: #FFFFFF;
            margin-bottom: 10px;

        }

        a {

            font-size: 1.25rem;
            font-weight: bold;
            color: #FFFFFF;
            margin-bottom: 30px;

            opacity: 0.5;

            :hover {

                opacity: 1;
                transition: .2s;

            }

        }

        @media (min-width: 768px) {

            margin: 0 25px

        }

        @media (min-width: 1024px) {

            margin: 0 45px

        }

    }

`