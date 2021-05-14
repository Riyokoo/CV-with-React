import React from 'react';
import './LeftHeader.css';
import PersonalDetailsSection from '../PersonalDetailsSection/PersonalDetailsSection';
import InterestsSection from '../InterestsSection/InterestsSection';


export default class LeftHeader extends React.Component {


    render() {
        return (
            
            <div className = "left-header">
                
                <PersonalDetailsSection></PersonalDetailsSection>
                <InterestsSection></InterestsSection>


            </div>
        )
    }
}