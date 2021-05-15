import React from 'react'
import './SkillsSection.css';
import { FaMouse } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs'

export default class SkillsSection extends React.Component {

    render() {
        return (
            <div className="skills-container">
                            
                     <FaMouse className = "skills-icon"></FaMouse>
                    <text className = "work-header">SKILLS</text>
        
                <div className = "skills-list">
                    
                    <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Experience using C, C++, Python and Java programming languages
                        </text>
                    </div>

                     <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Good understanding in OOP programming concepts
                        </text>
                    </div>

                     <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Knowledge in microprocessor and microcontroller(Arduino)
                        </text>
                    </div>

                     <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Good knowledge in HTML, CSS and JavaScript
                        </text>
                    </div>

                    <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Experience in using SQL Databases
                        </text>
                    </div>

                    <div className = "skill-item">
                        
                        <text className="skill-title-name">
                            <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Good knowledge in framework React js
                        </text>
                    </div>

                    <div className = "skill-item">
                       
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Good knowledge in React Native
                        </text>
                    </div>

                    <div className = "skill-item">
                        
                        <text className="skill-title-name">
                        <BsArrowRight className = "arrow-icon"></BsArrowRight>
                            Experiene with Firebase, Cloud Firestore
                        </text>
                    </div>

                    

                   

                   

                   

                    
                    
               </div>


            </div>
        )
    }
}