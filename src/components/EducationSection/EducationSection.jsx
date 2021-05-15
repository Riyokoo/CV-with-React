import React from 'react';
import './EducationSection.css';
import { IoIosSchool } from 'react-icons/io'

export default class EducationSection extends React.Component{

    render() {
        return (
            
            <div className="education-experience-container">
                            
                     <IoIosSchool className = "education-icon"></IoIosSchool>
                    <text className = "work-header">EDUCATION AND QUALIFICATIONS</text>
        
                <div className = "educations-list">
                    
                    <div className = "education-item">

                        <text className = "period">2015-2018</text>

                        <div className = "education-title">
                            <text className = "education-title-name">Diploma de Bacalaureat</text>
                            <text>Colegiul National "Gheorghe Titeica"</text>
                            <text className="description">
                                Graduated from the matemathics and informatics section 
                            </text>
                        </div>

                    </div>

                    

                   

                   

                    
                    
               </div>


            </div>
        )
    }
}