import React from 'react'
import styled from 'styled-components'
import img from '../Assets/perfil001.jpg'
import { VscGithub  } from 'react-icons/vsc' 
import { IconContext } from 'react-icons/lib'
import { SiLinkedin } from 'react-icons/si'
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from 'react-icons/ri'
import { VscPinned } from 'react-icons/vsc'
import { IoIosRocket } from 'react-icons/io'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'

const Divsobre = styled.div`
    width:960px;
    margin:0 auto;
    margin-top:10%;
    border-bottom:#9966ccc4 solid 2px; 
    display:flex;
    justify-content:center;
    h2{
        font-weight:bold;
    }
`
const Section = styled.section`
    width:960px;
    margin: 5% auto;
    padding-top:35px;
    display:flex;
    align-items:center;
`
const Perfil = styled.div`
    display:flex;
    flex: 1;
    flex-direction:column;
    align-items:center;
    row-gap:10px;
    img{
        width:200px;
        height: 200px;
        border-radius:50%;
    }
    p{
        font-size:1.5rem;
    }
`
const Divsocial = styled.div`
    padding:20px;
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
    border-left:#9966ccc4 solid 2px; 
    padding:0 25px;
    div{
        display:flex;
        flex-direction:column;
    }
    div h3{
        text-align:center;
    }
`
const P1 = styled.p`
        padding-left:15px;
        font-size:1.1rem;
        line-height:1.7rem;
        ::before{
            content:"💡";
            margin-right:15px;
        }
`
const P2 = styled.p`
    padding-left:15px;
    font-size:1.1rem;
    line-height:1.7rem;
    ::before{
        content:"🕙";
        margin-right:15px;
    }
`
const P3 = styled.p`
    padding-left:15px;
    font-size:1.1rem;
    line-height:1.7rem;
    ::before{
        content:"😉";
        margin-right:15px;
    }
`
const  Sobre = () =>{
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <>
        <Divsobre data-aos="fade-left" id="sobre">
            <h2><VscPinned/> Sobre</h2>
        </Divsobre>
        <Section data-aos="fade-up">  
            <Perfil>
                <img alt="Matheus" src={img} />
                <p>Matheus Matias</p>
                <Divsocial>
                    <Ul>
                        <li><IconContext.Provider value={{size:"2.1rem", color: "black", margin:"150px"}} ><a href="https://github.com/mmathias2011" title="Github"><VscGithub /></a></IconContext.Provider></li>
                        <li><IconContext.Provider value={{size:"2.1rem", color:"blue"}}><a href="https://www.linkedin.com/in/matheus-matias-neves-43b9071b7/" title="LinkedIn"><SiLinkedin /></a></IconContext.Provider></li>
                        <li><IconContext.Provider value={{size:"2.1rem", color: "black"}}><a href="mailto:mmathias2011@outlook.com" title="Email"><MdEmail /></a></IconContext.Provider></li>
                        <li><IconContext.Provider value={{size:"2.1rem", color: "green"}}><a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511991442672" title="Whatsapp"><RiWhatsappFill /></a></IconContext.Provider></li>
                   </Ul>
                </Divsocial>
            </Perfil>
            <Divdireita>
                <div>
                    <IconContext.Provider value={{size:"1.5rem"}}><h3>Conheça um pouco mais sobre mim <IoIosRocket/></h3></IconContext.Provider>
                        <P1>
                            Sou uma pessoa pró-ativa capaz de resolver problemas, tendo a capacidade de trabalhar com os recursos de que se dispõem.
                            Tenho a autoconfiança necessária para aceitar desafios que me façam aprender ainda mais e colocar em prática toda a energia
                            e capacidade de análise para resolvê-los e se adaptar em qualquer situação.
                        </P1>
                        <P2>
                            O gerenciamento de tempo também faz parte das minhas softskills, tendo em mente que gerenciar o tempo de forma performática
                            é ponto fundamental para cumprir as deadlines não apenas no âmbito profissional.
                        </P2>
                        <P3>
                            Sou comunicativo e tenho extrema facilidade de trabalho em equipe, tanto por relacionamento profissional quanto por inteligência emocional, sabendo lidar com pessoas e situações adversas.
                        </P3> 
                </div>
            </Divdireita>    
        </Section>
        </>
    )
}
export default Sobre