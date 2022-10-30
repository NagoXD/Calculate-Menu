import React from "react";
import "./App.css"
import { useState } from "react"
import { MaterialPicker , TwitterPicker , CompactPicker} from 'react-color';
const App = () => {
const [result , setResult] = useState("");
const [currentcolor , setCurrentcolor] = useState("#fff");
const [currentcolore1 , setCurrentcolore1] = useState("#fff");
const [currentcolore2 , setCurrentcolore2] = useState("#fff");
const [show , setShow] = useState(false);
const [showmenu , setShowMenu] = useState(false);
const [isActive , setIsActive] = useState(false);
const [isActiverotate , setIsActiveRotate] = useState(false);
const onhandlesresult = (e) => {
  setResult(result.concat(e.target.name));
 }
 const clear = () => {
  setResult("");
 }
 const backspace = () => {
  setResult(result.slice(0 , -1));
 }
 const calculate = () => {
  try {
    setResult(eval(result).toString());
  }
  catch{
    setResult ("Error")
  }
}
const onhanldescurrentcolor = (color) => {
  setCurrentcolor(color.hex);
}
const onhanldescurrentcolore1 = (colore1) => {
  setCurrentcolore1(colore1.hex)
}
const onhanldescurrentcolore2 = (colore2) => {
  setCurrentcolore2(colore2.hex)
}
const handleClick = (event) => {
 setIsActive(current => !current);
}
const handleClicke1 = (evente1) => {
  setIsActiveRotate(currente1 => !currente1)
}
const App = {
  color: currentcolor,
}
const Appe1 = {
  backgroundColor: currentcolore1,
}
const Appe2 = {
  backgroundColor: currentcolore2,
}
  return( 

    <div className="container" style={Appe1}>
  
    { show && <MaterialPicker className="materialpicker"
     
     color={currentcolor}
      onChange={updateColor => setCurrentcolor(updateColor)}
      onChangeComplete={onhanldescurrentcolor}/> }
   
   <div className="twitterpicker" >
  
    { show && <TwitterPicker
      color={currentcolore1}
      onChange={updateColor => setCurrentcolore1(updateColor)}
      onChangeComplete={onhanldescurrentcolore1}/>}
    
    </div>

    { show &&<div className="compactpicker">
    
      <CompactPicker 
       color={currentcolore2}
       onChange={updateColor => setCurrentcolore2(updateColor)}
       onChangeComplete={onhanldescurrentcolore2}/>
    
    </div> }

  <form>
    <input type="text" value={result} style={App}/>
  </form>

  <div className="keypad">

   <button style={Appe2}  name="clear" className={isActive ? "zoom" : ""} class={isActiverotate ? "rotate" : ""} onClick={clear}  id="Clear">Clear</button>
   <button style={Appe2}  name="backspace" className={isActive ? "zoom" : ""} class={isActiverotate ? "rotate" : ""} onClick={backspace} id="backspace" >C</button>
   <button style={Appe2}  name="9" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>9</button>
   <button style={Appe2}  name="8" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>8</button>
   <button style={Appe2}  name="*" className={isActive ? "zoom" : ""} class={isActiverotate ? "rotate" : ""}  onClick={onhandlesresult}  >&times;</button>
   <button style={Appe2}  name="7" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>7</button>
   <button style={Appe2}  name="6" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>6</button>
   <button style={Appe2}  name="5" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>5</button>
   <button style={Appe2}  name="/" className={isActive ? "zoom" : ""} class={isActiverotate ? "rotate" : ""}   onClick={onhandlesresult} >&divide;</button>
   <button style={Appe2}  name="4" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>4</button>
   <button style={Appe2}  name="3" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>3</button>
   <button style={Appe2}  name="2" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>2</button>
   <button style={Appe2}  name="-" className={isActive ? "zoom" : ""} class={isActiverotate ? "rotate" : ""}  onClick={onhandlesresult} >&ndash;</button>
   <button style={Appe2}  name="1" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>1</button>
   <button style={Appe2}  name="0" className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>0</button>
   <button style={Appe2}  name="." className={isActive ? "zoom" : "button-hover"} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult}>.</button>
   <button style={Appe2}  name="+" className={isActive ? "zoom" : ""} class={isActiverotate ? "rotate" : ""} onClick={onhandlesresult} >+</button>
   <button style={Appe2}  name="=" className={isActive ? "zoom" : ""} class={isActiverotate ? "rotate" : ""}  onClick={calculate} id="result">=</button>
      
       </div> 

       <button onClick= {() => setShowMenu(!showmenu)}>
        {showmenu === false ? "Open Menu" : "Close Menu"}
       </button>

       { showmenu &&  <div className="border">
        </div> }
       
       {showmenu &&
        <div className="menu"><button className={isActive ? "zoom " : ""} onClick={handleClick}>Zoom</button>
        
       <button className= {isActiverotate ? "rotate" : ""} onClick={handleClicke1} >Rotate</button>
       
       <button onClick={() => setShow(!show)}>
       
        {show === false ? "Show" : "Hide"}
       </button>
       
        </div>}
     </div>
)}
export default App;