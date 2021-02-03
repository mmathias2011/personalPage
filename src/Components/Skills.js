import React from 'react'
import styled from 'styled-components'
import { VscSettingsGear } from 'react-icons/vsc'
import html from '../Assets/html.svg'
import css from '../Assets/css.svg'
import Js from '../Assets/Js.svg'
import reactimg from '../Assets/reactimg.svg'
import mongodb from '../Assets/Mongodb.svg'
import { useEffect } from "react";
import Aos from 'aos'
import "aos/dist/aos.css"


const Container = styled.div`

    width:960px;
    margin:10% auto;
    
`

const Divskill = styled.div`
    
    width:960px;
    margin:45px auto;
    border-bottom:#9966ccc4 solid 2px; 
    display:flex;
    justify-content:center;
    font-weight:bold;
    

`
const Section = styled.section`

    display:flex;
    margin-top:100px;
    
    div{
        width:350px;
        height: auto;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        :hover{

            transform:scale(1.3);
            box-shadow: -10px -5px  15px #9966ccc4;
        }
    }
    div p{

        padding-top:15px;
    }
`
const Img = styled.img`

    width:40%;
`





const Skills = () => {

    useEffect(() => {
        
        Aos.init({ duration: 3000 });
        }, []);
    return (
        <>
        <Container data-aos="fadeIn" id="skills">
            <Divskill> 
                <h2><VscSettingsGear/> Skills</h2>
            </Divskill>
            <Section>
                <div>
                    
                    <Img alt="HTML"  src={html} />
                    <p>HTML</p>
                </div>
                <div>
                   
                    <Img alt="CSS" src={css} />
                    <p>CSS</p>
                </div>
                <div>
                    
                    <Img alt="Javascript" src={Js} />
                    <p>Javascript</p>
                </div>
                <div>
                    
                    <Img alt="React" src={reactimg} />
                    <p>React</p>
                </div>
                <div>
                    
                    <Img alt="MongoDB" src={mongodb} />
                    <p>mongoDB</p>
                </div>
                    

            </Section>
            
        </Container>
       
        </>
    )
}

export default Skills
