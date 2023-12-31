import React from 'react'
import './Header.css'
import HeaderOption from "./HeaderOption.js";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Logo from "../images/linkedin.png";
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice.js';
import { auth } from './firebase.js';
import { signOut } from "firebase/auth";

function Header() {

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    console.log("hi");
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className='header'>
        <div className='header__left'>
            <img src={Logo} alt="" />
            <div className="header__search">
              <SearchIcon />
              <input placeholder="Search" type="text" />
            </div>
        </div>

        <div className='header__right'>
          <HeaderOption Icon={HomeIcon} title='Home' />
          <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
          <HeaderOption Icon={ChatIcon} title='Messaging' />
          <HeaderOption Icon={NotificationsIcon} title='Notification' />
          <div onClick={logoutOfApp}><HeaderOption avatar={true} title='Me'/></div>
        </div>
    </div>
  )
}

export default Header