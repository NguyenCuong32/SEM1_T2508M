import './Product.css';
function Product(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <p>Description: {props.description}</p>
        </div>
    )
}
export default Product;