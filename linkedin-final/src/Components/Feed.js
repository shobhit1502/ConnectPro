import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption.js";
import Post from "./Post.js";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db } from './firebase.js';
import { collection, addDoc, Timestamp, query, onSnapshot, orderBy } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

  const user = useSelector(selectUser);

  const [inputData, setInput] = useState("");     
  //Again, we are using it as a variable to store the inputted data
  const [posts, setPosts] = useState([]);         
  //Used to store all the posts. Inital state is an empty array
 
  useEffect(() => {
    // To order the collection before you attach a listener, you need to perform a query. A query 
    //can take a reference, order the results and pass the results to the caller.
    onSnapshot(query(collection(db, "posts"), orderBy("timestamp","desc")), (snapshot) => setPosts(
      snapshot.docs.map((doc) => ({   
        id: doc.id,          
        data: doc.data(),
      }))
      //map is running the callback functiona and returning the results to the posts array
    ));
  }, []);


  const sendPost = (e) => {         //   e signifies an event
    e.preventDefault();
    //To prevent the refresh once enter button is clicked
    addDoc(collection(db, "posts"), {
      name: user.displayName,
      description: user.email,
      message: inputData,
      photoUrl: user.photoUrl || "",
      timestamp: Timestamp.fromDate(new Date()),
    });

    setInput("");
  };
  
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
          <div className="feed_input">
            <CreateIcon />
            <form method="POST">
              {/* Since we want the written message to be posted 
              somewhere */}
              <input
                value={inputData}
                onChange={(e) => setInput(e.target.value)}
                // Since the value will be stuck in the initial state of variable ie " ", we are chaning it instantaneously
                type="text"
                placeholder="Start a post"
              />
              {/* Since we have already set input blank string, we 
              have used onChange which captures anything written 
              and updates input */}
              <button onClick = {sendPost} type="submit">Send</button>
            </form>
          </div>

          <div className="feed_inputOptions">
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
            <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
            <InputOption Icon={CalendarViewDayIcon} title="Write Article"color="#7FC15E" />
          </div>
        </div>

        <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (  //Destructuring of the object
        <Post
          key={id} //Here, we are using the id as a unique key
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
        ))}
        </FlipMove>
    </div>
  )
}

export default Feed