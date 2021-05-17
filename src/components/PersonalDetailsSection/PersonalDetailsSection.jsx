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
import styled, { css } from 'styled-components'





var firestore_list = fb
    .firestore()
    .collection("CV")
    .doc("personal-details");

var firestore_list_2 = fb
    .firestore()
    .collection("CV")
    .doc("short-description");

const StyledEditText = styled(EditText)`

div[editext="view-container"], div[editext="edit-container"] {
    color: white;
    width: 300px;
  }
`


export default class PersonalDetailsSection extends React.Component {

    state = {
        address: "",
        email: "",
        phone:"",
        github: "",
        linkedin:"",
        tara:"",
        nume:"",
        prenume:"",
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

        firestore_list_2.onSnapshot((doc) => {
            this.setState({
                nume: doc.data().nume,
                prenume:doc.data().prenume,
            })
        })
    }

    changeNume(e) {
        firestore_list_2.update({
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
                
                <img
                    src = "https://scontent.fotp3-2.fna.fbcdn.net/v/t1.6435-9/58978298_2167208186924065_8335017876276641792_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=174925&_nc_ohc=o8vi4wMKbbAAX9M5iiP&_nc_ht=scontent.fotp3-2.fna&oh=83e91b94d1457f25f4421ad7cae38222&oe=60C9229B"
                    className = "profile-picture-facebook"
                    />

                <div className = "personal-details">

                    <text className = "personal-details-header">PERSONAL DETAILS</text>
                    
                    <div className = "section">
                        <BsFillPersonFill className = "profile-icon"></BsFillPersonFill>
                        <div className = "data">
                            <text className="changed-font">Name</text>
                            <text className = "changed-font-2">{this.state.nume}</text>
                            <text className = "changed-font-2">{this.state.prenume}</text>
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
                        <div className = "data ">
                            <text className = "changed-font">EMAIL</text>
                            <StyledEditText showButtonsOnHover value = {this.state.email} onSave = {(e) => this.changeEmail(e)} className = "changed-font-2">{this.state.address}</StyledEditText>
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