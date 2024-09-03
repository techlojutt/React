function Title(){
    let name = "Shoaib"
    return ( 
      <>
      <p>2*2 = {2*2}</p>
      <p>Hi,{name.toUpperCase()}</p>
      </>
    )
  }

export default Title


// simple export with curly braces is used to export multiple values 
// default export is used to export only one value and we can use custom naming when we use import default export 