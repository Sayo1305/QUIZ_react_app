import React, { useEffect, useState} from 'react'
import usesound from 'use-sound';
import tik  from './assets/tik_tok.mp3'

export default function Timer({setSTOP , question_num}) {
  const [tik_tok , {stop}] = usesound(tik);
    const [timer , settimer] = useState(30);
    useEffect(()=>{
        if(timer === 0) 
        {
          return setSTOP(true);
        }
        const interval = setInterval(()=>{
            settimer((prev) => prev - 1);
        },1000);
        return ()=> clearInterval(interval);
    },[setSTOP , timer , tik_tok]);
    useEffect(()=>{
         stop();
         settimer(30);
         tik_tok();
    },[question_num , tik_tok]);
  return (timer);
}
