
import { useRef } from "react";
export default function User({setusername}) {
    const inputRef = useRef();
    const handclick = ()=>{
        inputRef.current.value && setusername(inputRef.current.value);
    };
  return (
    <div className="start">
        <input placeholder="enter your name" className="input" ref={inputRef}   />
        <button className="start_btn" onClick={handclick}>start</button>
    </div>
  );
}
