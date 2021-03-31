import React from 'react'
import styled from 'styled-components'
import * as Scroll from 'react-scroll'
import { IconContext } from 'react-icons/lib'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'


const Section = styled.section`  
    background:#9966cc;
    padding: 10px 0;
    width:100%;

    @media screen and (max-width: 560px){
        width:100%;

    }
`
const Div = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width: 960px;
    margin: 0 auto; 
    .mobilebtn, .mobilemenu{
        display:none;
    }
    @media screen and (max-width: 560px){
        .mobilebtn{
            display:inline-flex;
            padding-right:15px;
        }
        
    }
`
const H1 = styled.h1`
    font-size: 1.8rem;
    color:white;
    @media screen and (max-width: 560px){
        white-space: nowrap;
        font-size:3vmax;
        padding-left:5px;
        
    }
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
    @media screen and (max-width:560px){
        display:none;
    }
`
const DivMenuMobile = styled.div`

.mobilemenu{
    display:none;

    margin-top:0;
    padding-left:0;
    
}
.mobilemenu li{
    padding-top:5px;
    padding-bottom:5px;
    text-align:center;
    border-bottom:1px solid #9966cc;
    
}

#on{
    display:block;
    width:100%;
    animation: smooth 5s forwards;

    @keyframes smooth {
        from{
            left:-100px;
        }
        to{
            right:100px;
        }
    }
    
}

#off{
    display:none;

}
`




const Header = () => {

    const [ State, setState]  = useState(false);

    
    return (
        <>
            <Section>    
                <Div>
                    <H1> &lt;/ Matheus Matias &gt;</H1>
                    <i className="mobilebtn" onClick={() =>{setState(!State) }}><IconContext.Provider value={{size:"2.1rem", color: "white"}}><GiHamburgerMenu/></IconContext.Provider></i>
                    <Ul>
                        <li><Scroll.Link to="sobre" smooth={true}>Sobre</Scroll.Link></li>
                        <li><Scroll.Link to="skills" smooth={true}>Skills</Scroll.Link></li>
                        <li><Scroll.Link to="laboratorio" smooth={true}>Laboratório</Scroll.Link></li>
                        <li><Scroll.Link to="contato" smooth={true}>Contato</Scroll.Link></li>
                    </Ul>
                </Div>
                
            </Section>   
            <DivMenuMobile >
            <ul className="mobilemenu" id={ State ? 'on' : 'off'}>

                <li><Scroll.Link to="sobre" smooth={true}>Sobre</Scroll.Link></li>
                <li><Scroll.Link to="skills" smooth={true}>Skills</Scroll.Link></li>
                <li><Scroll.Link to="laboratorio" smooth={true}>Laboratório</Scroll.Link></li>
                <li><Scroll.Link to="contato" smooth={true}>Contato</Scroll.Link></li>
            </ul>
        </DivMenuMobile>
        </>
    )
}
export default Header
