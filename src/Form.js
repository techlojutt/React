 
function handleFormSubmit(event){
    console.log("Form was submitted");
    event.preventDefault();
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