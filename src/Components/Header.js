import React from 'react'
import styled from 'styled-components'
import * as Scroll from 'react-scroll'


const Section = styled.section`
    
    background:#9966cc;
    padding: 10px 0;
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
        color:white;
        font-size: 1.2rem;
        padding: 0 20px; 
        :hover{
        cursor:pointer;
        background:white;
        border-radius:5px;
        color:#9966cc;
        padding:10px;
        box-shadow: 5px 10px 10px black;
        transform: scale(1.1);
        }

    }

    
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
                          <li><Scroll.Link to="sobre" smooth={true}>Sobre</Scroll.Link></li>
                          <li><Scroll.Link to="skill">Skills</Scroll.Link></li>
                          <li><Scroll.Link to="laboratorio">Laboratório</Scroll.Link></li>
                          <li><Scroll.Link to="contato">Contato</Scroll.Link></li>
                    </Ul>
                </Div>
            </Section>   
    )
}

export default Header
