import "./Product.css"

function Product({title,price}) {
    let styles = {};
    let isDiscount = price > 30000 ;
    if(isDiscount){
      styles = { backgroundColor : "pink"}
    }
    else{
       styles = { backgroundColor : null }
    }
    return (
        <div className = "Product" style = {styles} >
            <h3>{title}</h3>
            <h5>Price : {price} Rupees</h5>
            {isDiscount ? <p> "Discount of 5%" </p>:<a href = "/">Get discount</a>}
        </div>
    )
}

export default Product