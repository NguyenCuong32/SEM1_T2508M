import './Product.css';
function Product(props){
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Price: {props.price}</p>
            <p>Description: {props.description}</p>
            <div>
                <button id ="buyNow">Buy Now</button>
                <button id = "addToCart">Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;