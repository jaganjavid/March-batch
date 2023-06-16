import React from 'react'
import FeedbackItem from './FeedbackItem'

const FeedbackList = ({feedback}) => {
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
           <FeedbackItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default FeedbackList