import React, { useState } from 'react'
import quiz from "../resources/quizQuestion"
import {Link} from "react-router-dom"

const QuizComponent =()=>{
  let questions=quiz
  let [current,setCurrent]=useState(0)
  let [correct,setCorrect]=useState(0)
  let [wrong,setWrong]=useState(0)
  let [attempted,setAttempted]=useState(0)
  localStorage.setItem("attempted",attempted)
  localStorage.setItem("correct",correct)
  localStorage.setItem("wrong",wrong)
  // let {questions,current,correct,wrong,attempted} = this.state
    let handleNext =()=>{
      setCurrent( current=current+1)
    }
    let handlePrev =()=>{
      setCurrent(current=current-1)
    }
    let checkAnswer=(e)=>{
      // console.log(e.target.innerHTML)
      // console.log(questions[current].answer)
      // console.log(e.target.innerText == questions[current].answer)
      if(e.target.innerText == questions[current].answer){
        setCorrect(correct=correct+1)
        setAttempted(attempted=attempted+1)
        alert("Correct answer")
        setCurrent( current=current+1)
      }
      else{
        setWrong(wrong=wrong+1)
        setAttempted(attempted=attempted+1)
        alert("wrong answer")
        setCurrent( current=current+1)
      }
    }
    let handleQuit =()=>{
      // alert("Are you sure you want to quit ?")
      let shouldQuit = window.confirm('Are you sure you want to quit?');
      if (shouldQuit) {
        window.close();
      }
    }
    return (
      <div className='container'>
        <div className="quiz-box">
        <h1>Question</h1>
        <p className='current-number'>{current+1} of 15</p>
        <h3 className='Questions'>{questions[current].question} </h3>
        <div className="options">
          <button onClick={checkAnswer}>{questions[current].optionA}</button>
          <button onClick={checkAnswer}>{questions[current].optionB}</button>
          <button onClick={checkAnswer}>{questions[current].optionC}</button>
          <button onClick={checkAnswer}>{questions[current].optionD}</button>

        </div>
        <div className="change-page">
          <button className='Previous'disabled={current==0} onClick={handlePrev} >Previous</button>
          <button className='next' onClick={handleNext} disabled={current==14}>Next</button>
          <button className='quit' onClick={handleQuit}>Quit</button>
          <Link to={"/result"}  >
         <button className='finish' >Finish</button></Link>
        </div>
        </div>

        </div>
    )
}
export default QuizComponent