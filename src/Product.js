import "./Product.css"

function Product({title,price,features,features2}) {
    let list = features.map((feature)=><li>{feature}</li>);
    return(
        <div className = "Product">
            <h3>{title}</h3>
            <h5>Price : {price} Rupees</h5>
            <p>{features2.RAM}  ,{features2.CPU}</p>
            <p>{list}</p>
            <p>{features.map((feature)=><li>{feature}</li>)} </p>
        </div>
    )
}

export default Product