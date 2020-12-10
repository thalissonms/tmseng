import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom"

export default function Carrousel ({imgs, time}) {
    const [count, setCount] = useState(0);
    const rotate = () => {
        if (count < imgs.length - 1){
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

    useEffect (() => {
        const timer = setInterval(() => {
            rotate()
          }, time);
          return () => clearInterval(timer);   
    });
    
    return <img id="carrousel" alt="IMG" src={imgs[count]} />
}