import React from 'react'
import styled from 'styled-components'
import img from '../Assets/firstimg.jpg'
import curriculo from '../Assets/teste.pdf'

const Container = styled.div`
    padding-top:1rem;
    width:960px;
    margin: 25px auto;
    display:flex;
    align-items:center;
    



`

const Divesquerda = styled.div`

    flex:2;
    
    p{
        padding-top:15px;
        display:flex;
        flex-wrap:wrap;
        font-size:1.3rem;
        letter-spacing:1.2px;
        width:75%;
        padding-left:1%;
    }
`

const Divdireita = styled.div`
    
    flex:1;
    
    img{
        max-width:100%;
        min-width:150px;
        display:block;
        width:22vw;
    }
`
const Acurriculo = styled.a`
    margin-top:50px;
    width:50%;
    padding:3%;
    font-size:1.2rem;
    display:flex;
    justify-content:center;
    border: solid #9966cc 3px;
    border-radius:25px;
    color:#9966cc;

    :hover{
        background:#9966cc;
        color:white;
        --moz-transform: scale(1.1);
        --webkit-transform: scale(1.1);
        transform: scale(1.1) ;
        box-shadow: 10px 10px 10px grey;
    }
    
`

const SectionCurriculo = () => {
    return (

            <Container>  

                <Divesquerda>

                    <h2>Desenvolvedor &lt;/ Front-End &gt;</h2>

                    <p>
                        Olá! Meu nome é Matheus e sou desenvolvedor Front-End, esse é um site portifólio para demonstrar alguns projetos, skills e também formas de contato direto.
                    </p>
                    <Acurriculo href={curriculo} download="testeCurriculo.pdf">BAIXAR CURRÍCULO</Acurriculo>

                </Divesquerda>
                <Divdireita>

                    <img src={img}></img>

                </Divdireita>    

            </Container>
        
    )
}

export default SectionCurriculo
