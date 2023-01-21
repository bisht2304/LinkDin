import React from 'react'
import { Avatar } from '@mui/material';
import "./css/header.css";
import { useSelector,useDispatch } from 'react-redux';
import { selectUser ,logoutuser} from './features/userSlice';
import firebase from "firebase";

function Headeroption({Icon,title,avatar}) {
  const user=useSelector(selectUser);
  const dispatch = useDispatch()
  return (
    <div className='header_option'>
    {
      Icon &&  <Icon/>
    }
    {
        avatar && <Avatar name={avatar} src={user.photoURL} onClick={e=>firebase.auth().signOut().then( dispatch(logoutuser()))}/>
    }
   
    <span>{title}</span>
    
    </div>
  )
}

export default Headeroption