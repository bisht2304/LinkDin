import {React,useState} from 'react'
import "./css/login.css"
import {auth} from './firebase';
import {useDispatch} from 'react-redux';
import {loginuser} from './features/userSlice';

function Login() {
    const [signup,setSignUp]=useState(false);
    const [name,setName]=useState("");
    const [photoURL,setPhotoURL]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const dispatch=useDispatch();

    const register=(e)=>{
        e.preventDefault();
    
    if(!name){
        return alert("name is required");
    }
    if(!photoURL){
        return alert("photoURL is required");
    }
    if(!email){
        return alert("email is required");
    }
    if(!password){
        return alert("password is required");
    }
    auth.createUserWithEmailAndPassword(email,password).then((userAuth)=>{
      userAuth.user.updateProfile({
        displayName:name,
        photoURL:photoURL
      }).then(()=>{
        dispatch(loginuser({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          photoURL:photoURL,
          displayName:name

        }))
        

      })
    }).catch(error=>alert(error))


    setName("");
    setPhotoURL("");
    setEmail("");
    setPassword("");
  }
  const signIn=(e)=>{
    e.preventDefault();
    if(!email){
      return alert("email is required")
    }
    if(!password){
      return alert("password is required")
    }

    auth.signInWithEmailAndPassword(email,password).then(({user})=>{
      dispatch(loginuser({
        email:user.email,
        uid:user.uid,
        photoURL:user.photoURL,
        displayName:user.displayName
      }))
    }).catch(error=>alert(error));
  }


  return (
    <>
    
    <div className='loginscreen'>
    <img src="https://www.seekpng.com/png/detail/371-3715298_advertise-on-
    linkedin-linkedin-logo-no-background.png" alt="shubh"/>
    {
        signup===true ? (
<form onSubmit={register}>
<input type="text" placeholder="Full Name"  value={name} onChange={e=>setName(e.target.value)}/>
<input type="text" placeholder="Profile picture Url" value={photoURL}  onChange={e=>setPhotoURL(e.target.value)}/>
<input type="email" placeholder="Email"  value={email} onChange={e=>setEmail(e.target.value)}/>
<input type="password" placeholder="Password"  value={password} onChange={e=>setPassword(e.target.value)}/>
<input type="submit" value="SignUp"/>
<h4>Already a memeber ? <span onClick={e=>setSignUp(false)}>Login Here</span></h4>
</form>)
:
( 
<form onSubmit={signIn}>
    
<input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
<input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
<input type="submit" value="Sign In"/>
<h4>Not a memeber ? <span onClick={e=>setSignUp(true)}>Register Here</span></h4>
</form>
)
    }
    
    
    
    </div>
    </>
  )
}

export default Login