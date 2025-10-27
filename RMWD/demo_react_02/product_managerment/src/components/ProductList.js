import "./ProductList.css";
import Product from "./Product";
import productData from "../data/ProductData.json";

function ProductList(){
    return(
        <div className="product-list">
            {productData.map((product, index) => (
                <Product 
                    key={index}
                    name={product.name} 
                    price={product.price} 
                    description={product.description} 
                />
            ))}
        </div>
    )
}
export default ProductList;