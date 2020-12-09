import React,{useState} from "react";
import "./styles.css";


const gesturesDB = {
  
  "🙍" : "Frowning",
  "🙎‍♂️" : "Pouting",
  "🙅‍♀️" : "Gesturing No",
  "🙆" : "Gesturing Ok",
  "💁‍♂️" : "Tripping Hand",
  "🙋‍♀️" : "Raising Hand",
  "🙇" : "Bowing",
  "🤦‍♂️" : "Facepalming",
  "🤷‍♀️" : "Struggling", 
  "👈" : "Pointing Left",
  "🖖" : "Vulcan salute",
  "✊" : "Raised Fist",
  "👊" : "Oncoming Fist",
  "👉" :"Pointing Right",
  "🤘" :"Sign of the Horns",
  "🤟c" :"Love-You",
  "🤙" :"Call me Hand",
  "👆" :"Pointing Up",
  "🤏c" :"Pinching Hand",
  "🧏c" :"Deaf",
  "🤷‍♂️" :"Shrugging",
  "🧎c" :"Kneeling",
  "🕴️":"Suit Levitating",
  "😟":"Worried",
  "😯":"Hushed",
  "😀":"Grinning",
  "😕":"Confused",
  "😑":"Expressionless",
  "😌":"Relieved",
  "🥺c":"Begging",
  "😂":"Tears of Joy",
  "😫":"Tired",

}

const gesturesKeys = Object.keys(gesturesDB);

export default function App() {
  
  const [meaning,setMeaning] = useState("")
  const [emoji,setEmoji] = useState("")

  function getEmojiMeaning(event)
  {
      

      if(event.target.value in gesturesKeys)
      {
        setEmoji(event.target.value);
        setMeaning(gesturesDB[event.target.value]);
      }
      else{
        setMeaning("Not having Meaning");
      }
  }

  function getGestureMeaning(event)
  { 
     setEmoji(event);
     setMeaning(gesturesDB[event]);
  }

  return (
    <div className="App">
    
    <div className="divHomeP">
    
    <p>

       

       Hey,<span className="strikeThrough">do you know</span> 
       you must have known about <span className="decorateTxt">BodyLanguage</span>, 
       which gets us to know about someone's emotions, feelings, and what they are thinking? 
       cided to master it, read about it from the internet, watched videos from youtube, or 
       what possible. <span style={{textDecoration:"underline"}}>But there is a difference between REEL and REALITY.</span>  Thus,"I make this to teach-oneself about BodyLanguage." 
       <br />
       To check, first, interpret an emoji in mind then click on that emoji 
       to see it's meaning, and you can also enter an emoji to know it's meaning.

       


    </p>
{/* */}
    
    </div>

  <div className="common-IO-display common-IO">

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

      <div className="emojis-display"> 
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
