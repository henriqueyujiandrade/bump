import styled from "styled-components";

export const Container = styled.div`

    width: 300px;
    background-color: white;

    margin: 0 auto 30px auto;

    @media (min-width: 768px) {

        width: 500px;

    }

    @media (min-width: 1024px) {

        width: 600px;

    }

    @media (min-width: 1920px) {

        width: 700px;
        margin: 0 0 30px 0;

    }

`