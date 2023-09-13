import React from 'react'
import './HeaderOption.css'
import { Avatar } from "@material-ui/core";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({avatar, Icon, title}) {

  const user = useSelector(selectUser);

  return (
    <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon'/>}
        {/* Render the icon only if we are passing it */}
        {avatar && <Avatar className='headerOption__icon'>{user?.email[0]}</Avatar>}
        <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption