
import { useState } from 'react';

import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';


function App() {

  const [feedback, setFeedback] = useState([
    {
      id:1,
      rating:7,
      text:"This is my sample text 1"
    },
    {
      id:2,
      rating:9,
      text:"This is my sample text 2"
    },
    {
      id:3,
      rating:10,
      text:"This is my sample text 3"
    },
  ])

  const addFeedback = (newFeedBack) => {
    setFeedback([newFeedBack, ...feedback]);
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete?")){
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }


  return (
    <div>
      <Header/>
      <div className="container"> 
          <FeedbackForm handleAdd={addFeedback}/>
          <FeedbackStats feedback={feedback}/>
          <FeedbackList feedback={feedback} handleDelete={handleDelete}/>
      </div> 
    </div>
  )
}

export default App;
