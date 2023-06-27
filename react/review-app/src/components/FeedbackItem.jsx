import {FaTimes, FaEdit} from "react-icons/fa";
import Card from "./shared/Card";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";



const FeedbackItem = ({ item }) => { 

  const{ deleteFeedback, editFeedback} = useContext(FeedbackContext);

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
          <FaTimes color="blue"/>
        </button>
        <div className="text-display">{item.text}</div>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="blue"/>
        </button>
    </Card>
  )
}

export default FeedbackItem