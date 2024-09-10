function handleClick(){
    console.log("Hello world!");

}
function printBye(){
   console.log("Bye!");
   
}
function handledblClick(){
    console.log("Double Clicked!");
}

function Button(){
    return (
        <div>
        <button onClick = {handleClick}>Click Me</button>
        <p onMouseOver = {printBye}>hello saad i hope you will be very well in lahore ,dear saad i, m  waiting for your response but you did,nt give me a response of my call i want to know how your journey is going with tibiyan  </p>
        <button onDoubleClick = {handledblClick}>Double Click Me</button>
        </div>
    );
}
export default Button;