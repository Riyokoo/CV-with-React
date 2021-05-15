import React from 'react';
import './CV-Container.css';
import DescriptionSection from '../DescriptionSection/DescriptionSection';
import WorkExperienceSection from '../WorkExperienceSection/WorkExperienceSection';
import EducationSection from '../EducationSection/EducationSection';
import SkillsSection from '../SkillsSection/SkillsSection';

export default class CvContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="cv-container">
                
                <DescriptionSection></DescriptionSection>
                <WorkExperienceSection></WorkExperienceSection>
                <EducationSection></EducationSection>
                <SkillsSection></SkillsSection>
                
                
                

            </div>
        )
    }
}