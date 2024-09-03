import "./Product.css"

function Product({title,price,features,features2,features3}) {
    
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>Price : {price} Rupees</h5>
            <p>{features}</p>
            <p>{features2}</p>
            {/* <p>{features3.b}</p> */}
        </div>
    )
}

export default Product