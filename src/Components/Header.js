import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    background:tomato;
`


const Div = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width: 960px;
    margin: 0 auto;
    
  
`

const H1 = styled.h1`
    font-size: 1.5rem;
   
  
`

const Li = styled.li`
    font-size: 1rem;
    padding: 0 10px;
    

`
const Ul = styled.ul`  
display:flex;
flex-wrap:wrap;

    
`
const A = styled.a`
    color:white;
`


const Header = () => {
    return (
        <Section>    
            <Div>
                <H1> &lt;/ Matheus Matias &gt;</H1>
                <Ul>
                    <Li><A href="sobre">Sobre</A></Li>
                    <Li><A href="skills">Skills</A></Li>
                    <Li><A href="lab">laboratório</A></Li>
                    <Li><A href="contato">Contato</A></Li>
                </Ul>
            </Div>
        </Section>    
    )
}

export default Header
