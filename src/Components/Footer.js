import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    width:100%;
    height: 15vh;
    background-color:darkgrey;
    p{
        font-size:1.5rem;
    }
`

const Footer = () => {
    return (
        <Container>
            <p>&copy; Todos os direitos reservados - Matheus Matias 2021 &copy;</p>
        </Container>
    )
}

export default Footer
