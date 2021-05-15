import React from 'react';
import './LanguagesSection.css';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const options = [
    { value: "A1", label: "A1" },
    { value: "A2", label: "A2" },
    { value: "B1", label: "B1" },
    { value: "B2", label: "B2" },
    { value: "C1", label: "C1" },
    { value: "c2", label: "C2" },
    
]

export default class LanguagesSection extends React.Component {

    render() {
        return (
            
            <div className="languages-section">
                
                <div className = "languages-header">
                    <text>LANGUAGES</text>
                </div>
                
                <div className = "languages-list">

                    <div className = "language-item">
                        <text>English</text>
                        <Select className = "select" options = {options}></Select>
                    </div>

                    <div className = "language-item">
                        <text>French</text>
                                                                        <Select className = "select" options = {options}></Select>

                    </div>

                    <div className = "language-item">
                        <text>German</text>
                                                <Select className = "select" options = {options}></Select>

                    </div>
                     
                    

                </div>

            </div>

        )
    }
    
}