 
function handleFormSubmit(event){
    console.log("Form was submitted");
    event.preventDefault();
    console.log(event)
    event.stopPropagation();
};

function Form(){
  return  (
        <form>
        <input  placeholder = "write something" />
        <button onClick = {handleFormSubmit}>Submit</button>
        </form>
    )
};

export default Form;