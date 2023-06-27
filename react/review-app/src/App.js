
import { useState } from 'react';

import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

import { FeedbackProvider } from './context/FeedbackContext';


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
    <FeedbackProvider>
      <Header/>
      <div className="container"> 
          <FeedbackForm/>
          <FeedbackStats/>
          <FeedbackList/>
      </div> 
    </FeedbackProvider>
  )
}

export default App;
