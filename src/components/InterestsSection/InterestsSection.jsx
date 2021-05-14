import React from 'react';
import './InterestsSection.css';
import {BsSquareFill} from 'react-icons/bs'

export default class InterestsSection extends React.Component {

    render() {
        return (
            
            <div className = "interests-section-container">

                <text className = "interests-header">INTERESTS</text>

                <div className = "interests-list">

                    <div className = "interest-item">
                        <BsSquareFill className = "square-icon"></BsSquareFill><text>Football</text>
                    </div>
                    <div className = "interest-item">
                        <BsSquareFill className = "square-icon"></BsSquareFill> <text>Playing video games</text>
                    </div>
                    <div className = "interest-item">
                        <BsSquareFill className = "square-icon"></BsSquareFill><text>Reading books</text>
                    </div>
                    

                </div>
            
            </div>
        )
    }

}