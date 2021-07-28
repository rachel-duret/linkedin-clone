import React, {useState, useEffect} from 'react'
import './feed.scss'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptuonsIcon from '@material-ui/icons/Subscriptions'
import EventIcon from '@material-ui/icons/Event'
import CalendrViewDatIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import {db} from '../../firebase';
import firebase from 'firebase';
import { Input } from '@material-ui/icons'


function Feed() {
    const [posts, setPosts] = useState([]);
    const [input, setInput] = useState('');
    /* create collection posts, and set the data */
    useEffect(() =>{
        db.collection('posts')
        .orderBy('timestamp', 'desc')
        .onSnapshot((onSnapshot) => {
            setPosts(
                onSnapshot.docs.map((doc)=>({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        })


    }, []);

    const sendPost =(e) => {
        e.preventDefault();
        /* starting stock the database to firebase */
        db.collection('posts').add({
            name:"racle",
            description:"this is a test",
            message:input,
            imageUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')

    }

    return (
        <div className="feed">
            <div className="feed__inputContainer">
               <div className="feed__input">
                  <CreateIcon /> 
                  <form action="">
                      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} />
                      <button type="submit" onClick={sendPost} >Send</button>

                  </form>
               </div>
               <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color=' #70B5F9' />
                <InputOption Icon={SubscriptuonsIcon} title="Video" color=' #7A33E' />
                <InputOption Icon={EventIcon} title="Event" color=' #C0CBCD' />
                <InputOption Icon={CalendrViewDatIcon} title="Write article" color='#7FC15E' />
               </div>
            </div>

            {/* post */}
            {
                posts.map(({id, data:{name, description, message, imageUrl}})=>(
                    <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    imageUrl={imageUrl}
                    />
    ))
            }
            {/* <Post name="RAchel" description="this a a test" message="from rachel" /> */}

        </div>
    )
}

export default Feed
