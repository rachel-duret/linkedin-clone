import { Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React,{forwardRef} from 'react'
import InputOption from './InputOption'
import './post.scss'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon  from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const Post = forwardRef(({name, description, message, photoUrl}, ref)=> {
 
    return (
        <div ref={ref} className="post"> 
            <div className="post__header">
              <Avatar src={photoUrl}>{name[0]}</Avatar>
              <div className="post__info">
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
               
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
              <InputOption Icon={ThumbUpAltIcon} title="Like" color=' gray' />
              <InputOption Icon={ChatOutlinedIcon} title="Chat" color=' gray' />
              <InputOption Icon={ShareOutlinedIcon} title="Share" color=' gray' />
              <InputOption Icon={SendOutlinedIcon} title="Send" color=' gray' />
            </div>
            
        </div>
    )
})

export default Post
