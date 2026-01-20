import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "../api/productApi";
import ProductTable from "../components/ProductTable";

function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await getProducts();
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product Inventory</h2>

      <div style={{ marginBottom: "10px" }}>
        <Link to="/add">➕ Add Product</Link>{" "}
        <Link to="/reports">📊 Reports</Link>
      </div>

      <ProductTable products={products} onDelete={handleDelete} />
    </div>
  );
}

export default Products;
