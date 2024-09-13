import { useState } from "react"





export default function Counter(){
const [count,setCount] = useState(0)

let incCount = ()=>{
    
   setCount(count+1) ;
}
    let styles = {
        margin : '15% 42% 0% 42%',
        textAlign : 'center',
    }
let buttonStyle = {
    fontSize : '30px'
}
let countStyle = {
    fontSize : '30px',
}
    return(
        
        <div style = {styles}>
            <h1>
                State in React
            </h1>
            <h2 style = {countStyle}>count = {count}</h2>
            <button style = {buttonStyle} onMouseOver = {incCount}>increase count</button>
        </div>

    )
}