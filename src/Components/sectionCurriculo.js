import React from 'react'
import styled from 'styled-components'
import img from '../Assets/firstimg.jpg'
import curriculo from '../Assets/teste.pdf'

const Container = styled.div`
    padding-top:1rem;
    width:960px;
    margin: 0 auto;
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-areas:" esquerda direita";
    grid-column-gap:25px;
    align-items:center;



`

const divEsquerda = styled.div`

    grid-area:esquerda;

    

`
const Img = styled.img`

    max-width:100%;
    width:20vw;
    
    
`
const divDireita = styled.div`
    
    grid-area: direita;

   

`
const P = styled.p`
    font-size:1.1rem;
    
`
const Acurriculo = styled.a`
    width:50%;
    padding:3%;
    display:flex;
    justify-content:center;
    justify-items:center;
    border: solid #9966cc 2px;
    border-radius:25px;
    
`

const SectionCurriculo = () => {
    return (

            <Container>  

                <divEsquerda>

                    <P>Desenvolvedor &lt;/ Front-End &gt;</P>

                    <P>
                        Olá! Meu nome é Matheus e sou desenvolvedor Front-End, esse é um site portifólio para demonstrar alguns projetos, skills e também formas de contato direto.
                    </P>
                    <Acurriculo href={curriculo} download="testeCurriculo.pdf">Download Text</Acurriculo>

                </divEsquerda>
                <divDireita>

                    <Img src={img}></Img>

                </divDireita>    

            </Container>
        
    )
}

export default SectionCurriculo
