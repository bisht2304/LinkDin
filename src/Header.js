import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EmailIcon from '@mui/icons-material/Email';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { Avatar } from '@mui/material';
import "./css/header.css";
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';

import Headeroption from './Headeroption';
function Header() {
  const user=useSelector(selectUser);
  console.log(user)
  return (
   <div className='header'>
    <div className='header_left'>
    <div classname='header_logo'>
    <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="shubh"></img>
    
    </div>
    <div className='header_search'>
    <SearchIcon/>
    <input type="text" placeholder="Search"></input>
    
    </div>
    
    </div>
    <div className='header_right'>
    <Headeroption Icon={HomeIcon} title="Home"/>
    <Headeroption Icon={PeopleAltIcon} title="My Network"/>
    <Headeroption Icon={BusinessCenterIcon} title="Job"/>
    <Headeroption Icon={EmailIcon} title="Message"/>
    <Headeroption Icon={CircleNotificationsIcon} title="Notification"/>
    <Headeroption avatar={Avatar} title={user.displayName}/>
    
    </div>
   </div>
  )
}

export default Header;