import React from 'react'
import styled from 'styled-components'
import { BsPersonFill } from 'react-icons/bs'
import { VscGithub  } from 'react-icons/vsc' 
import { SiLinkedin } from 'react-icons/si'
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = styled.div`

    width:960px;
    margin:5% auto;
    border-bottom:#9966ccc4 solid 2px; 
    display:flex;
    justify-content:center;
    font-weight:bold;
    h2{
        font-weight:bold;
    }

`
const Container = styled.div`

    width:960px;
    margin:0 auto;
   
`
const Divcentral = styled.div`

    text-align:center;
    p{
        margin:10px;
        font-size:1.2rem;
        font-weight:bold;
    }
`
const Divlinks = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
    ul{
        padding:0;
    }
    ul li{
        padding:25px;
    }

    ul li a{
        text-decoration:none;
        color:black;
        font-size:1.2rem;
        :hover{
            color:blue;
        }
    }

`

const Contato = () => {
    useEffect(() => {
        
        Aos.init({ duration: 3000 });
        }, []);
    return (
        <>
        <Contact data-aos="fade-left"><h2><BsPersonFill/> Contato</h2></Contact>

        <Container data-aos="fade-left" id="contato">

            <Divcentral>
                <p>Fique a vontade para entrar em contato comigo, será um prazer atendê-lo.</p>
                <p>Estou disponível todos os dias.</p>
            </Divcentral>

          <Divlinks>
                <ul>
                    <li><RiWhatsappFill/><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511991442672"><strong>   Telefone: </strong> (11) 9 9144-2672</a></li>
                    <li><MdEmail/><a href="mailto:mmathias2011@outlook.com"><strong>   Email: </strong> mmathias2011@outlook.com</a></li>
                </ul>
        

           
                <ul>
                    <li><SiLinkedin/><a href="https://www.linkedin.com/in/matheus-matias-neves-43b9071b7/"><strong>   LikedIn: </strong> https://www.linkedin.com/in/matheus-matias-neves</a></li>
                    <li><VscGithub/><a href="https://github.com/mmathias2011"><strong>   Github: </strong>https://github.com/mmathias2011</a></li>
                </ul>
                </Divlinks>

            
        </Container>
       
        </>
    )
}

export default Contato
