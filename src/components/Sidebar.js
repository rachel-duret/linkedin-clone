import React from 'react'
import {Avatar} from '@material-ui/core'
import './sidebar.scss'
import {useSelector} from 'react-redux'
import { selectUser } from '../features/counter/userSlice'

function Sidebar() {
    const user = useSelector(selectUser);
    console.log(user)
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" alt="" />
                <Avatar className="sidebar__avatar" src={user.photoUrl} />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            
            <div className="sidebar__stats">
              <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
              </div>
              <div className="sidebar__stat">
                <p>Who on post</p>
                <p className="sidebar__statNumber">2,444</p>
              </div>
            </div>
            

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
}

export default Sidebar
