import React, { useEffect } from 'react';
import Header from "./Header"
import Sidebar from './Sidebar';
import Feed from './Feed'
import Widget from'./Widget'
import Login from "./Login"
import { useSelector,useDispatch } from 'react-redux';
import {selectUser,loginuser,logoutuser} from './features/userSlice';
import { auth } from './firebase';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  //jaise hi hamri app hoti h render then hamra useEffect chalega
  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //already login
        dispatch(loginuser({
          email:userAuth.email,
          uid:userAuth.uid,
          photoURL:userAuth.photoURL,
          displayName:userAuth.displayName
        }))


      }else{
        dispatch(logoutuser());

      }
    })


  },)

  return (
    <>
    {
      !user ? (<Login/>) : (
    <div className='app_wrapper'>
        <Header/>
      <div className='app_body'>
        <Sidebar/>
        <Feed/>
        <Widget/>
      </div>
    </div>
      )
    }
    </>
   
  );
}

export default App;
