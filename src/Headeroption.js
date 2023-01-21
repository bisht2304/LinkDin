import React from 'react'
import { Avatar } from '@mui/material';
import "./css/header.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import firebase from "firebase";

function Headeroption({Icon,title,avatar}) {
  const user=useSelector(selectUser);
  return (
    <div className='header_option'>
    {
      Icon &&  <Icon/>
    }
    {
        avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut()}/>
    }
   
    <span>{title}</span>
    
    </div>
  )
}

export default Headeroption