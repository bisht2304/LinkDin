import React,{useEffect, useState} from 'react'
import { Avatar } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EventIcon from '@mui/icons-material/Event';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./css/feed.css"
import Post from "./Post"
import firebase from "firebase";
import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {
  const user=useSelector(selectUser);
  const [posts,setPost]=useState([]);
    const [input,setInput]=useState();
    const submitPost=(e)=>{
      e.preventDefault();
      db.collection("posts").add({
        name:user.displayName,
        descrption:"this is test",
        message:input,
        photoURL:user.photoURL,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      });
      setInput("");

}
//by using this hook ,you tell that your component needs to do something after render.

useEffect(()=>{
  db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
    setPost(snapshot.docs.map(doc=>({
      id:doc.id,
      data:doc.data()
    })))

  })
  
},[])
  return (
    <div className='feed'>
    <div className='feed_input'>
    <div className='feed_form'>
    <Avatar src={user.photoURL}/>
    <form onSubmit={submitPost}>
    <input type="text" placeholder='start a post' value={input} 
    onChange={e=>setInput(e.target.value)}/>
    <input type="submit"/>
    
    </form>
    </div>
    
    
    <div className='feed_option'>
    <div className='option'>
    <AddAPhotoIcon style={{color:'#70b5f9'}}/>
    <span>Photo</span>

    </div>
    <div className='option'>
    <YouTubeIcon style={{color:'#70b5f9'}}/>
    <span>Video</span>

    </div>
    <div className='option'>
    <EventIcon style={{color:'#70b5f9'}}/>
    <span>Event</span>

    </div>
    <div className='option'>
    <AssignmentIcon style={{color:'#70b5f9'}}/>
    <span>Write article</span>

    </div>
    </div>
    </div>
   <FlipMove>
    {
      posts.map(({id,data:{name,description,message,photoURL}})=>{
      return <Post  key={id}name={name} description={description} message={message}
        photoURL={photoURL}/>
      })
    }
    </FlipMove>
   
    
    </div>
  )
}

export default Feed