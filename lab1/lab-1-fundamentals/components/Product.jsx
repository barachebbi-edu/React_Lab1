import './Product.css';
function Product({ title, price, inStock, rating }) {
    return (
        <div className="product-card">
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <p>Status: {inStock ? "In Stock" : "Out of Stock"}</p>
            <p>Rating: {rating} stars</p>
        </div>
    )
}
export default Product;
