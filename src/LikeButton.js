import "./LikeButton.css" ;
import {useState} from "react" ;

export default function LikeButton()
{
    
 const [isLiked,setIsLiked] = useState(false);
 const [clicks,setClicks] = useState(0);


  let  toggleLike = () =>{
    setIsLiked(!isLiked);
    setClicks(clicks+1);
  }
    let styles = {
        margin : '15% 42% 0% 42%',
        textAlign : 'center',
    }
let buttonStyle = {
   color : "red" ,
}
let countStyle = {
    fontSize : '30px',
}
let heartIcon ;
if(isLiked){
    heartIcon = <i className="fa-regular fa-heart"></i>
 }
 else{
    heartIcon =   <i style = {buttonStyle} className="fa-solid fa-heart"></i>
 }
    return(
        
        <div style = {styles}>
            <h1>
                State in React
            </h1>
            <h3>Clicks = {clicks}</h3>
            <p onClick = {toggleLike} className = "likebutton">
               {heartIcon}
            </p>
        </div>
    )
}