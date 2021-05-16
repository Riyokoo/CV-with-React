import React from 'react';
import './PersonalDetailsSection.css';
import { IoPersonCircleOutline } from 'react-icons/io5'
import { BsFillPersonFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';

var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("personal-details");

export default class PersonalDetailsSection extends React.Component {

    state = {
        address: "",
        email: "",
        phone:"",
        github: "",
        linkedin:"",
        
    }

    constructor(props) {
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                address: doc.data().address,
                email: doc.data().email,
                phone: doc.data().phone,
                github: doc.data().github,
                linkedin:doc.data().linkedin,
                
            })
        })
    }

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
                            <text className = "changed-font-2">{this.state.address}</text>
                        </div>
                    </div>

                    <div className = "section">
                        <FaPhone className = "phone-icon"></FaPhone>
                        <div className = "data">
                            <text className = "changed-font">Phone number</text>
                            <text className="changed-font-2">{this.state.phone}</text>
                        </div>
                    </div>

                    <div className = "section">
                        <MdEmail className = "phone-icon"></MdEmail>
                        <div className = "data">
                            <text className = "changed-font">Email adress</text>
                            <text className="changed-font-2">{this.state.email}</text>
                        </div>
                    </div>

                    <div className = "section">
                        <AiFillGithub className = "phone-icon"></AiFillGithub>
                        <div className = "data ">
                            <text className = "changed-font">Github</text>
                            <a className="changed-font-2"
                                href={this.state.github} className="linkedin-link" >
                                 Riyokoo
                                </a>
                        </div>
                    </div>

                    <div className = "section">
                        <AiFillLinkedin className = "phone-icon"></AiFillLinkedin>
                        <div className = "data ">
                            <text className = "changed-font">LinkedIn</text>
                            <a className="changed-font-2"
                                href={this.state.linkedin} className="linkedin-link" >
                               Ciuculescu Vladimir
                                </a>
                        </div>
                    </div>

                </div>

            </div>

        )
    }

}