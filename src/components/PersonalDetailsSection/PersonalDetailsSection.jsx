import React from 'react';
import './PersonalDetailsSection.css';
import { IoPersonCircleOutline } from 'react-icons/io5'
import { BsFillPersonFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';

export default class PersonalDetailsSection extends React.Component {

    render() {
        return (
            
            <div className = "personal-details-container">
                <IoPersonCircleOutline className="profile-picture"></IoPersonCircleOutline>
                
                <div className = "personal-details">

                    <text className = "personal-details-header">PERSONAL DETAILS</text>
                    
                    <div className = "section">
                        <BsFillPersonFill className = "profile-icon"></BsFillPersonFill>
                        <div className = "data">
                            <text className = "changed-font">Name</text>
                            <text className = "changed-font-2">Ciuculescu Vladimir</text>
                        </div>
                    </div>

                    <div className = "section">
                        <BsFillHouseDoorFill className = "house-icon"></BsFillHouseDoorFill>
                        <div className = "data adress-data">
                            <text className = "changed-font">Adress</text>
                            <text>Bulevardul 2 scara 4 apartament 15</text>
                        </div>
                    </div>

                    <div className = "section">
                        <FaPhone className = "phone-icon"></FaPhone>
                        <div className = "data">
                            <text className = "changed-font">Phone number</text>
                            <text  className = "changed-font-2">0754364913</text>
                        </div>
                    </div>

                    <div className = "section">
                        <MdEmail className = "phone-icon"></MdEmail>
                        <div className = "data">
                            <text className = "changed-font">Email adress</text>
                            <text  className = "changed-font-2">vladimir.ciuculescu@</text>
                        </div>
                    </div>

                    <div className = "section">
                        <AiFillGithub className = "phone-icon"></AiFillGithub>
                        <div className = "data ">
                            <text className = "changed-font">Github</text>
                            <a className="changed-font-2"
                                href="https://github.com/Riyokoo" className="linkedin-link" >
                                 Riyokoo
                                </a>
                        </div>
                    </div>

                    <div className = "section">
                        <AiFillLinkedin className = "phone-icon"></AiFillLinkedin>
                        <div className = "data ">
                            <text className = "changed-font">LinkedIn</text>
                            <a className="changed-font-2"
                                href="https://www.linkedin.com/in/ciuculescu-vladimir-2017b41b9/" className="linkedin-link" >
                               Ciuculescu Vladimir
                                </a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }

}