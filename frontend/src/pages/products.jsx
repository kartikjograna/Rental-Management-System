import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Rentable Products</h1>
      {products.map(p => (
        <div key={p._id}>
          <h3>{p.name}</h3>
          <p>₹ {p.pricePerDay} / day</p>
        </div>
      ))}
    </div>
  );
}
