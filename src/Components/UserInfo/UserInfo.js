import React from 'react';
import './UserInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const UserInfo = (props) => {
    console.log(props)
    const {fullName,gender,email,img,salary} = props.user;
    const buttonStyle = {
        backgroundColor: 'burlywood',
        fontSize: '20px',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '15px'
    }
    return (
    <div className="Allinformation">    
        <div className="user-info">
            <h4>{fullName}</h4>
            <h4>{gender}</h4>
            <h4>{email}</h4>
            <h4>Salary: {salary}</h4>
            <img src={img} alt=""/>
            <br/>
            <button onClick={()=>{props.addPerson(props.user)}} style={buttonStyle}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Add Person</button>
        </div>
        
    </div>    
    );
};

export default UserInfo;