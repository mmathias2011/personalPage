import React from 'react'
import styled from 'styled-components'
import img from '../Assets/perfil001.jpg'
import { VscGithub  } from 'react-icons/vsc' 
import { IconContext } from 'react-icons/lib'
import { SiLinkedin } from 'react-icons/si'
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from 'react-icons/ri'
import { VscPinned } from 'react-icons/vsc'

const Divsobre = styled.div`

    display:flex;
    justify-content:center;
    h2{
        font-weight:bold;
    }
`
const Section = styled.section`

    width:960px;
    margin: 0 auto;
    padding-top:35px;
    display:flex;
    align-items:center;
`

const Perfil = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;
    align-items:center;
    row-gap:20px;

    img{
        width:200px;
        height: 200px;
        border-radius:50%;
    }

    div a{
        size:5rem;
        
    }
`
const Divsocial = styled.div`
    padding:25px;
    display:flex;
    
`
const Ul = styled.ul`
    display:flex;
    margin:0;
    padding:0;
    
     li{
         padding:10px;
     }
`
const Divdireita = styled.div`

    flex: 2;

`


const  Sobre = () =>{

    
    return (
        <>
        <Divsobre  id="sobre">

            <h2><VscPinned/> Sobre</h2>

        </Divsobre>
        <Section>  
            
        
            <Perfil>

                <img src={img} />

                <Divsocial>
                    <Ul>
                        <li><IconContext.Provider value={{size:"2.1rem", color: "black", margin:"150px"}} ><a href="https://github.com/mmathias2011" title="Github"><VscGithub /></a></IconContext.Provider></li>
                        <li><IconContext.Provider value={{size:"2.1rem", color:"blue"}}><a href="" title="LinkedIn"><SiLinkedin /></a></IconContext.Provider></li>
                        <li><IconContext.Provider value={{size:"2.1rem", color: "black"}}><a href="" title="Email"><MdEmail /></a></IconContext.Provider></li>
                        <li><IconContext.Provider value={{size:"2.1rem", color: "green"}}><a href="" title="Whatsapp"><RiWhatsappFill /></a></IconContext.Provider></li>
                   </Ul>
                </Divsocial>
               
            </Perfil>
            
            <Divdireita>

                

            </Divdireita>
        </Section>
    </>
    )
}

export default Sobre