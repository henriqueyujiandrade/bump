import styled from "styled-components";

export const Container = styled.div`

    background-color: rgba(0, 0, 0, 0.25);

    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;

    z-index: 2;

    div {

        position: relative;

        .btn-close {

            position: absolute;
            right: 2%;
            top: 5%;

            i {

                color: white;
                font-size: 2rem;

            }

        }

        form {

            border-radius: 15px;

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

                font-weight: bold;

                opacity: 0.8;
                transition: 0.2s;

                :hover {

                    opacity: 1;

                }

            }

        }
    }
    
`