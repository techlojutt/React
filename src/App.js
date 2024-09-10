import React from 'react';
import "./App.css";
import Form from  "./Form.js";

// if we are not want to create an extra node of div then we use react fragment  <></>  
function App() {
   
  return (
   <div>
      <Form/>
   </div>
  )
}

export default App;


// normally we cannot write javascript in jsx but by using the window of curly braces we can write javascript in jsx Syntax 
