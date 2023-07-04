import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
    })

    useEffect(() => {
      fetchFeedback();
    },[]);

    // Fetch Feedback
    const fetchFeedback = async () => {

      const response = await fetch(`/feedback?_sort=id&_order=desc`);
      
      const data = await response.json();

      setFeedback(data);
      setIsLoading(false);
    }

    // Add Feedback
    const addFeedback = async(newFeedBack) => {
      // newFeedBack.id = uuidv4();
      const response = await fetch("/feedback", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(newFeedBack)
      })

      const data = await response.json();

      setFeedback([data, ...feedback]);
    }

    // Delete Feedback 
    const deleteFeedback = async(id) => {
      if(window.confirm("Are you sure you want to delete?")){
            await fetch(`/feedback/${id}`, {method: "DELETE"})
            setFeedback(feedback.filter((item) => item.id !== id));
      }
    } 

    // Update Feedback
    const updateFeedback = async(id, updItem) => {
      const response = await fetch(`/feedback/${id}`, {
        method:'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(updItem)
      })

      const data = await response.json();

      setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item));
    }

    // Check if item is true for edit state
    const editFeedback = (item) => {
      setFeedbackEdit({
        item:item,
        edit: true,
      })
    }
    

    return (
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        deleteFeedback,
        editFeedback,
        updateFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext;