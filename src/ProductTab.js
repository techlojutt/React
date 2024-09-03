import Product from "./Product.js";
import "./ProductTab.css"

function ProductTab(){
    return(
        <div className = "ProductTab">
          <Product title = "Phone" price = {30000}/> 
          <Product title = "Laptop" price = {50000}/>
          <Product title = "Pen"/> 
        </div>
    )
}

export default ProductTab