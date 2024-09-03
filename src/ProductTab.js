import Product from "./Product.js";
import "./ProductTab.css"

function ProductTab(){
  let option1 = ["fast","reliable"];
  let option2 = {
    size: "large",
    color: "blue"
  };
    return(
        <div className = "ProductTab">
          <Product title = "Phone" price = {30000} features2={["hi-tech","durable","fast"]}/> 
          <Product title = "Laptop" price = {50000} features = {option1} />
          <Product title = "Pen" price = {10} features3={{a:"hi-tech",b:"reliable"}}/> 
        </div>
    )
}

export default ProductTab