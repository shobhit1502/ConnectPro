import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Feed from './Components/Feed';
import Widgets from './Components/Widgets';
import { login, logout, selectUser } from "./features/userSlice.js";
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import { auth } from './Components/firebase';
import { onAuthStateChanged } from "firebase/auth";

function App() {

  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }));
      }
      else {
        //user is logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />

      {!user ? <Login /> : 

      <div className="app__body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
      }
    </div>
  );
}

export default App;
