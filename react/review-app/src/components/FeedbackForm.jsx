import { useState } from "react"
import Card from "./shared/Card"

const FeedbackForm = () => {

  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

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
    
  return (
    <Card>
        <form>
            <h2>What you like to write?</h2>

            <div className="input-group">
                
               <input type="text" onChange={handleTextChange} placeholder="Write a Review" value={text}/>
               <button type="submit" disabled={btnDisabled}>Send</button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm