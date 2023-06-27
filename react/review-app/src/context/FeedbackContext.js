import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    
    const [feedback, setFeedback] = useState([
          {
            id:1,
            rating:7,
            text:"This is my Context text 1"
          },
          {
            id:2,
            rating:9,
            text:"This is my Context text 2"
          },
          {
            id:3,
            rating:10,
            text:"This is my Context text 3"
          },
          {
            id:4,
            rating:10,
            text:"This is my Context text 4"
          },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false
    })

    const addFeedback = (newFeedBack) => {
      setFeedback([newFeedBack, ...feedback]);
    }

    const updateFeedback = (id, updItem) => {
      console.log(id, updItem);
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item:item,
        edit: true,
      })
    }
    

    const deleteFeedback = (id) => {
        if(window.confirm("Are you sure you want to delete?")){
              setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    

   

    return (
    <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
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