import React from 'react'
import {Link} from "react-router-dom"

export default class ResultComponent extends React.Component {
    

  render() {
      let attempted=localStorage.getItem("attempted")
  let correct =localStorage.getItem("correct")
  let wrong = localStorage.getItem("wrong")
    return (
      <div className='container'>
      <h1 className='result'>Result</h1>
      <div className="result-box">
        <h3>Need more practice!</h3>
        <h1>Your score is {correct}</h1>
        <div className='summary'>
          <p>Total number of questions</p>
          <p>15</p>
        </div>
        <div className='summary'>
          <p>Number of attempted questions</p>
          <p>{attempted}</p>
        </div>
        <div className='summary'>
          <p>Number of correct answers</p>
          <p>{correct}</p>
        </div>
        <div className='summary'>
          <p>Number of wrong answers</p>
          <p>{wrong}</p>
        </div>
      </div>
      <div className="action">
        <button className='play-again'>Play Again</button>
        <Link to={"/"} ><button className='back'>Back to home</button></Link>
      </div>
      </div>
    )
  }
}
