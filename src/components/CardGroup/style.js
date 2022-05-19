import styled from "styled-components";

export const ListContainer = styled.ul`

    list-style-type: none;
    margin-bottom: 20px;

    @media (min-width: 768px) {

        margin: auto 20px 20px 20px;

    }
    
    li {

        opacity: 0.8;

        background-color: #6D17B0;
        text-align: center;

        border-radius: 10px;
        padding: 50px;
        transition: 0.2s;

        .card-name {

            font-size: 1.5rem;
            font-weight: bold;

        }

        .card-tasks {

            font-size: .8rem;
            color: #E0E0E0;

        }

        :hover {

            cursor: pointer;
            border: 1px solid #FFFFFF;
            opacity: 1;
        }

    }
   
`