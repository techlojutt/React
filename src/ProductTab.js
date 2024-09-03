import Product from "./Product.js";
import "./ProductTab.css"

function ProductTab(){
  let option1 = ["fast","reliable","hi-tech"];
  let option2 = {
    RAM: "8GB",
    CPU: "i5",
    GPU: "Nvidia GeForce GTX 1660"
  }
    return(
        <div className = "ProductTab">
          <Product title = "Laptop" price = {50000} features = {option1} features2 = {option2} />
        </div>
    )
}

export default ProductTab