import React,{useState} from "react";
import "./styles.css";


const gesturesDB = {
  
  "🙍" : "Frowning",
  "🙆" : "Gesturing Ok",
  "🙇" : "Bowing",
  "🕴️":"Suit Levitating",
  "🙎‍♂️" : "Pouting",
  "💁‍♂️" : "Tripping Hand",
  "🤦‍♂️" : "Facepalming",
  "🤷‍♂️" :"Shrugging",
  "🙅‍♀️" : "Gesturing No",
  "🙋‍♀️" : "Raising Hand",
  "🤷‍♀️" : "Struggling", 
  "👈" : "Pointing Left",
  "🖖" : "Vulcan salute",
  "✊" : "Raised Fist",
  "👊" : "Oncoming Fist",
  "👉" :"Pointing Right",
  "🤘" :"Sign of the Horns",
  "🤙" :"Call me Hand",
  "👆" :"Pointing Up",
  "😟":"Worried",
  "😯":"Hushed",
  "😀":"Grinning",
  "😕":"Confused",
  "😑":"Expressionless",
  "😌":"Relieved",
  "😐":"Neutral",
  "😂":"Tears of Joy",
  "😫":"Tired",
  // "🧎🏽" :"Kneeling",
  // "🤏🏼" :"Pinching Hand",
  // "🧏🏼‍♀️" :"Deaf",
  // "🤟🏽" :"Love-You",
}

const gesturesKeys = Object.keys(gesturesDB);

export default function App() {
  
  const [meaning,setMeaning] = useState("")
  const [emoji,setEmoji] = useState("")

  function getEmojiMeaning(event)
  {
    var emoji = event.target.value ;
   

      if (emoji in gesturesDB)
      {
        // console.log("yes",emoji);
        setEmoji(event.target.value);
        setMeaning(gesturesDB[event.target.value]);
      }
      else{
        // console.log(emoji);
        setEmoji("");
        setMeaning("Not Found");
      }
  }

  function getGestureMeaning(event)
  { 
     setEmoji(event);
     setMeaning(gesturesDB[event]);
  }

  return (
    <div className="App">
    
    <div className="divHomeP appMargins">
    
    <p>
       Hey,<span className="strikeThrough">do you know</span> 
       you must have known about <span className="decorateTxt">BodyLanguage</span>, 
       which gets us to know about someone's emotions, feelings, and what they are thinking? 
       <br/>
       I decided to master it, read about it from the internet, watched videos from youtube, or 
       what possible. <span style={{textDecoration:"underline"}}>But there is a difference between REEL and REALITY.</span>  Thus,"I make this to teach-oneself about BodyLanguage." 
       <br/>
       To check, first, interpret an emoji in mind then click on that emoji 
       to see it's meaning, and you can also enter an emoji to know it's meaning.
    </p>
{/* */}
    
    </div>

  <div className="appMargins common-IO-display">

  <span style={{fontSize:"1rem",marginLeft:".5rem",cursor:"none"}}
    className="common-IO">Enter emoji here to see it's meaning</span>

  <input className="common-IO"
  onChange={(item) => getEmojiMeaning(item)}
  style={{fontSize:"2rem"}}>
        </input>
  {/* <span className="common-IO"> </span> */}
  <div  className="common-IO"       
    style={{fontSize:"2rem",cursor:"none"}}        >
     {emoji}  {meaning}  
     
  </div> 

  </div>

      <div className="appMargins emojis-display"> 
      {
        gesturesKeys.map((item) => {
          return (
            <span 
            className="grid-item"
            key={item}
            onClick={() => getGestureMeaning(item)}> 
            {item} 
            </span>
          );
        })
      }
      </div>

    </div>
  );
}
