
import { useState } from 'react';

import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';


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

  return (
    <div>
      <Header/>
      <div className="container">
          <FeedbackList feedback={feedback}/>  
      </div> 
    </div>
  )
}

export default App;
