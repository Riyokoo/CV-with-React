import React from 'react';
import './PersonalDetailsSection.css';
import { IoPersonCircleOutline } from 'react-icons/io5'
import { BsFillPersonFill, BsFillHouseDoorFill } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';
import fb from '../../Fire.js';
import firestore from '@firebase/firestore';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import EditText from 'react-editext';




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
        tara:"",
        nume:"",
    }

    constructor(props) {    
        super(props);

        firestore_list.onSnapshot(doc => {
            this.setState({
                nume:doc.data().nume,
                address: doc.data().address,
                email: doc.data().email,
                phone: doc.data().phone,
                github: doc.data().github,
                linkedin:doc.data().linkedin,
                
            })
        })
    }

    changeNume(e) {
        firestore_list.update({
            nume:e
        })
    }

    changeAddress(e) {
        firestore_list.update({
            address:e
        })
    }

    changeEmail(e) {
        firestore_list.update({
            email:e
        })
    }

    changePhone(e) {
        firestore_list.update({
            phone:e
        })
    }

    changeGithub(e) {
        firestore_list.update({
            githuv:e
        })
    }

    changeLinkedin(e) {
        firestore_list.update({
            phone:e
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
                            <EditText showButtonsOnHover value = {this.state.nume} onSave = {(e) => this.changeNume(e)} className = "changed-font-2">Ciuculescu Vladimir</EditText>
                        </div>
                    </div>

                    <div className = "section">
                        <BsFillHouseDoorFill className = "house-icon"></BsFillHouseDoorFill>
                        <div className = "data adress-data">
                            <text className = "changed-font">Adress</text>
                            <EditText showButtonsOnHover value = {this.state.address} onSave = {(e) => this.changeAddress(e)} className = "changed-font-2"></EditText>
                        </div>
                    </div>

                    <div className = "section">
                        <FaPhone className = "phone-icon"></FaPhone>

                        <div className = "data">
                            <text className = "changed-font">Phone number</text>
                            <EditText showButtonsOnHover value = {this.state.phone} onSave = {(e) => {this.changePhone(e)}} className = "changed-font-2"></EditText>
                            
                        </div>
                    </div>

                    <div className = "section">
                        <MdEmail className = "phone-icon"></MdEmail>
                        <div className = "data adress-data">
                            <text className = "changed-font">EMAIL</text>
                            <EditText showButtonsOnHover value = {this.state.email} onSave = {(e) => this.changeEmail(e)} className = "changed-font-2">{this.state.address}</EditText>
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