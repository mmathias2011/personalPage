import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background:#9966cc;
    padding: 10px 0;
    overflow:hidden;
    width:100%;
`


const Div = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width: 960px;
    margin: 0 auto; 
  
`

const H1 = styled.h1`
    font-size: 1.8rem;
    color:white;
  
`
const Ul = styled.ul`  
display:flex;
flex-wrap:wrap;
    li{
        font-size: 1.2rem;
        padding: 0 20px; 
    }

    
`
const A = styled.a`
    color:white;
    :hover{
        background:white;
        border-radius:5px;
        color:#9966cc;
        padding:10px;
        box-shadow: 5px 10px 10px black;
        transform: scale(1.1);

    }
`


const Header = () => {
    return (
        <Section>    
            <Div>
                <H1> &lt;/ Matheus Matias &gt;</H1>
                <Ul>
                    <li><A href="sobre">Sobre</A></li>
                    <li><A href="skills">Skills</A></li>
                    <li><A href="lab">laboratório</A></li>
                    <li><A href="contato">Contato</A></li>
                </Ul>
            </Div>
        </Section>    
    )
}

export default Header
