import Counter from './Counter';
import './Product.css';
function Product(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Price: ${props.price}</p>
            <p>Description: {props.description}</p>
            <Counter value ={props.value}></Counter>
        </div>
    )
}
export default Product;