import React, { useEffect }from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { selectUser,login, logout } from './features/counter/userSlice'
import Header from './components/header/Header';
import Sidebar from './components/Sidebar'
import Feed from './components/feed/Feed';
import Login from './pages/Login'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import Widgets from './components/widgets/Widgets';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth)
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch((logout()));
      }
    })
  },[])


  return (
    <div className="app">
      {/* header */}
      <Header />

  {/* APP body */}
      { !user ? (
        <Login />
      ) : (
      
        <div className="app__body">
          <Sidebar />
          <Feed />
        {/* widgets */}
        <Widgets />
        </div>

      )}

      
    </div>
  );
}

export default App;
