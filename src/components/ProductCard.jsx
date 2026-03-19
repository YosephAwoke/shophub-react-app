import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const {addToCart} = useCart();
  return (
    <div key={product.id} className="product-card">
      <img
        src={product.image}
        className="product-card-image"
        alt={product.name}
      />
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
        <div className="product-card-actions">
          <Link className="btn btn-secondary " to={`/products/${product.id}`}>
            View Details
          </Link>
          <button className="btn btn-primary " onClick={() => addToCart(product.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
