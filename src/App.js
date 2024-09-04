import "./App.css";
import MsgBox from "./MsgBox.js";
import ProductTab from "./ProductTab.js"


// if we are not want to create an extra node of div then we use react fragment  <></>  
function App() {
   
  return (
    <div className = "App">
      <MsgBox textColor = "yellow" userName = "shoaib" />
      <MsgBox textColor = "green" userName = "bilal" />
      <MsgBox textColor = "blue" userName = "ismail" />
      <MsgBox textColor = "aqua" userName = "ibrahim" />
      <ProductTab/>
    </div>
  )
}

export default App;


// normally we cannot write javascript in jsx but by using the window of curly braces we can write javascript in jsx Syntax 
