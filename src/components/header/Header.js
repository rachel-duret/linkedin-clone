import React from 'react'
import './header.scss'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import HeaderOption from './HeaderOption'
import SupervisorAccountIcon  from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://img.over-blog-kiwi.com/0/97/03/42/obpicJLL7GT.jpeg" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network " />
                <HeaderOption Icon={BusinessCenterIcon} title="Business" />
                <HeaderOption Icon={ChatIcon} title="Chat" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/D5635AQFDfvMynLdr_g/profile-framedphoto-shrink_200_200/0/1623077872713?e=1627416000&v=beta&t=cs0wsWVMWOQVINxFUiBxE9YWfIA6tJTLWjuvjqPD4TI" title="me" />
            </div>
        </div>
    )
}

export default Header
