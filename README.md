# SEM1_T2508M
# Hướng dẫn tạo dự án với reactjs
Bước 1: Tạo folder cho dự án. Ví dụ demo_reactjs_01
Bước 2: Sử dụng lệnh terminal đi đến folder vừa tạo dự án
Bước 3: Tạo dự án bằng lệnh: npx create-react-app ten_du_an
		cd ten_du_an
		npm start
		

# Hướng dẫn tạo một component
Bước 1: trong folder src tạo một folder với tên: components
Bước 2: trong folder components tạo file Product.js và Product.css
Bước 3: viết code cho component
    function Product(){
        return (
            -- Các thẻ giao diện và logic của component
        )
    }
    export default Product;

## Ví dụ:
    import './Product.css';
    function Product(){
    return (
        <div>
            <h1>iPhone 17 Pro</h1>
            <p>Price: $1199</p>
            <p>Description: The latest iPhone with advanced features and improved performance.</p>
            <div>
                <button id ="buyNow">Buy Now</button>
                <button id = "addToCart">Add to Cart</button>
            </div>
        </div>
    )
}
export default Product;

Bước 4; Sử dụng component
    - import component trước khi sử dụng
    - gọi đúng tên của component muốn dùng, cú pháp giống với thẻ html.
# Hướng dẫn tạo một page
Bước 1: Trong folder src tạo một folder pages
        Trong folder page tạo file ProductPage.js
Bước 2: Viết code cho page
    - giống với component về cú pháp
    - ví dụ:
    import Product from "../components/Product"
    function ProductPage() {
        return (
            <div>
                <Product />
                <Product />
                <Product />
            </div>
        )
    }
    export default ProductPage;

Bước 3: sử dụng page
    Tại file App.js, gọi đến ProductPage
    function App() {
        return (
            <ProductPage />
        );
    }

    