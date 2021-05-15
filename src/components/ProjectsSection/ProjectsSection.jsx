import React from 'react'
import './ProjectsSection.css';
import { FaArrowAltCircleRight, FaArrowCircleRight } from 'react-icons/fa';
import {AiTwotoneFolder} from 'react-icons/ai'

export default class ProjectsSection extends React.Component{

    render() {
        return (
            <div className="skills-container">
                            
                     <AiTwotoneFolder className = "projects-icon"></AiTwotoneFolder>
                    <text className = "work-header">PROJECTS</text>
        
                <div className = "skills-list">
                    
                    <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <FaArrowAltCircleRight className = "arrow-icon"></FaArrowAltCircleRight>
                            Changing a LED's color based on temperature and humidity with an Arduino microcontroller
                        </text>
                    </div>

                     <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <FaArrowAltCircleRight className = "arrow-icon"></FaArrowAltCircleRight>
                            Am embedded alaram system powered by an Arduino microcontroller
                        </text>
                    </div>

                     <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <FaArrowAltCircleRight className = "arrow-icon"></FaArrowAltCircleRight>
                            Building an E-commerce website powered by React js and Firebase
                            
                        </text>
                    </div>

                     <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <FaArrowAltCircleRight className = "arrow-icon"></FaArrowAltCircleRight>
                            A simple tic tac toe game developed in React js
                        </text>
                    </div>

                    <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <FaArrowAltCircleRight className = "arrow-icon"></FaArrowAltCircleRight>
                            A simple TODO Application on mobile(Android), developed in React Native and Cloud Firestore 
                        </text>
                    </div>

                    

               </div>


            </div>
        )
    }

}