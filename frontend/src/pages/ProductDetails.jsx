import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    api.get(`/products/${id}`).then(res => setProduct(res.data));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>₹ {product.pricePerDay}/day</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}
