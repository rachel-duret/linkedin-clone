import React, { useState } from 'react'
import { auth } from '../firebase';
import './login.scss'
import {useDispatch} from 'react-redux'
import {login} from '../features/counter/userSlice'
function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    const [profileUrl, setProfileUrl] = useState('')
    const dispatch = useDispatch();

    const loginToApp =(e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            dispatch(
                login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName:userAuth.user.displayName,
                    profileUrl:userAuth.user.photoUrl,
                })
            )
        })
        .catch((error)=>{
            alert(error)
        })

    }

    const signup = () => {
        if(!name) {
            return alert('please entre a full name!')
        };

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth)=>{
            userAuth.user.updateProfile({/* update the profile to firebase user data */
                displayName: name,
                photoURL: profileUrl
            })
            /* push the user data to redux */
            .then(()=>{
                dispatch(
                    login({
                        email:userAuth.user.email,
                        uid:userAuth.user.uid,
                        displayName: name,
                        photoURL:profileUrl,
                    })
                )
            })
            .catch((error)=>{
                alert(error)
            });
        });

    };
    return (
        <div className="login">
           <img src="https://www.anaf.fr/wp-content/uploads/2016/08/linkedin-1080x675.jpg" alt="" />

           <form >
               <input 
               type="text" 
               placeholder="Full name" 
               value={name} 
               onChange={(e)=>{
                   setName(e.target.value)
               }} 
               required />

               <input 
               type="text" 
               placeholder="Your profile photo URL" 
               value={profileUrl}
               onChang={(e)=>{
                   setProfileUrl(e.targer.value)
               }}
               />

               <input 
               type="email" 
               placeholder="Your email" 
               value={email}
               onChange={(e)=>{
                   setEmail(e.target.value)
               }}
               required />

               <input 
               type="password" 
               placeholder="Password"
               value={password}
               onChange={(e)=>{
                   setPassword(e.target.value)
               }} 
               required />

               <button type="submit" onClick={loginToApp} >Login</button>
           </form>

           <p>
               Not a member?
               <span className="login__register" onClick={signup}> Sign Up</span>
           </p>
        </div>
    )
}

export default Login
