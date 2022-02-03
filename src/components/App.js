import { useState } from "react";
import video from "../data/video.js";
import Comment from "./Comment.js";

function App() {
  console.log("Here's your data:", video);
  const [upvotes,setUpvotes] = useState(video.upvotes);
  const [downvotes,setDownvotes] = useState(video.downvotes);
  const [isVisible,setIsvisible] = useState(true);
  const handleUpVotesChange = (e) => {
    e.preventDefault();
    setUpvotes(upvotes + 1)
  }
  const handleDownVotesChange = (e) => {
    e.preventDefault();
    setDownvotes(downvotes +1)
  }
  const handleIsvisible = (e) => {
    e.preventDefault();
    setIsvisible(!isVisible);
  }
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
     <h1>{video.title}</h1> 
     <p>{video.views} | {video.createdAt}</p>
     <button onClick={handleUpVotesChange }>{upvotes}</button>
     <button onClick={handleDownVotesChange }>{downvotes}</button><br/>
     <button onClick={handleIsvisible}>Hide Comments</button><hr/><br/>
     <div className={isVisible == false ? "notVisible" : "visible"} >
     <h3>{video.comments.length} Comments</h3>
      <Comment comment={video.comments[0]}/>
      <Comment comment={video.comments[1]}/>    
     </div>
      </div>
  );
}

export default App;
