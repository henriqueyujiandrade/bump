import styled from "styled-components";

export const Container = styled.div`

    width: 300px;
    background-color: white;

    margin: 0 auto 30px auto;
    border-radius: 20px;

    .slider div{

        background-color: transparent;
        border-radius: 20px;

        img {

            border-radius: 20px;
            width: 100%;
            height: 100%;

        }

    }
    
    

    @media (min-width: 768px) {

        width: 500px;

    }

    @media (min-width: 1920px) {

        margin: 0 0 30px 0;

    }

`