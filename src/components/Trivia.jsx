import React, { useEffect, useState } from 'react'
import usesound from 'use-sound';
import play from './assets/play.mp3';
import correct from './assets/correct.mp3';
import wrong from './assets/wrong.mp3';
import tik  from './assets/tik_tok.mp3'

export default function Trivia({data , setSTOP , question_num , question_set}) {
  const [question, setquestion] = useState(null);
  const [answer , setanswer] = useState(null);
  const [className , setClassName] = useState("answer");
  const [letsplay] = usesound(play);
  const [tik_tok , {stop}] = usesound(tik);
  const [correct_sound] = usesound(correct);
  const [wrong_sound] = usesound(wrong);
  useEffect(()=>{
    letsplay();
  },[letsplay, question_num]);
  useEffect(()=>{
    setquestion(data[question_num-1])
  },[data , question_num]);

  const delay = (duration , callback) =>{
    setTimeout(()=>{
      callback();
    },  duration);
  }

  const HandleClick = (a)=>{
    setanswer(a);
    setClassName("answer active");
    delay(2000 , ()=>{
      setClassName (a.verdict  ? "answer correct" : "answer wrong");
    });
    delay(5000, ()=>{
      if(a.verdict)
      {
        correct_sound();
        delay(5000 , ()=>{
          question_set((prev)=>prev+1);
          setanswer(null);
        });
      }else{
        wrong_sound();
        stop();
        delay(2000 , ()=> {
          setSTOP(true);
        });
      }
    })
  }

  return (
    <div className='Trivia'>
        <div className="question">{question?.question} </div>
        <div className="answers">
          {question?.answers.map((a) =>(
            <div className={answer === a ? className : "answer"}  onClick={()=>{HandleClick(a)}}>
              {a.text}
            </div>
          ))}
        </div>
    </div>
  )
}
