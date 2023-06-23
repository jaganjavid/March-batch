import { useState } from "react"

import Card from "./shared/Card"
import Button from "./shared/Button";

import RatingSelect from "./RatingSelect";

const FeedbackForm = ({handleAdd}) => {

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(1);

  const handleTextChange = (e) => {
    if(text === ""){
        setBtnDisabled(true);
        setMessage(null)
    } else if(text !== "" && text.trim().length <= 10){
        setBtnDisabled(true);
        setMessage("Text must be at least 10 characters");
    } else {
        setBtnDisabled(false);
        setMessage(null);
    }

    setText(e.target.value);
  }

    
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length > 10){
      const newFeedback = {
        text,
        rating
      }

      handleAdd(newFeedback);

      setText("");
    }
  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>What you like to write?</h2>
            
            <RatingSelect select={(rating) => setRating(rating)}/>
            
            <div className="input-group">
               <input type="text" onChange={handleTextChange} placeholder="Write a Review" value={text}/>
               <Button type="submit" version={"primary"} isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm