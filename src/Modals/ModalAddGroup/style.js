import styled from "styled-components";

export const Container = styled.main`

    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    height: 100%;

    position: absolute;

    z-index: 2;

    .btn-close {

        position: absolute;
        left: 340px;

        i {

            color: white;
            font-size: 2rem;

        }

        @media (min-width: 768px) {

            left: 700px;

        }

        @media (min-width: 1024px) {

            left: 950px;
            font-size: 3rem;

        }

    }

    form {

        background-color: #B84DEB;
        width: 375px;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 20px;

        input {

            width: 50%;
            margin: 10px 0 10px 0;
            padding: 10px

        }

        button {

            padding: 10px;
            background-color: #FEEE35;
            border-radius: 10px;

            opacity: 0.8;
            transition: 0.2s;

            :hover {

                opacity: 1;

            }

        }

    }
    
`