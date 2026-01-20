import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct, updateProduct, getProducts } from "../api/productApi";
import ProductForm from "../components/ProductForm";

function AddEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProducts().then((res) => {
        const found = res.data.find((p) => p._id === id);
        setProduct(found);
      });
    }
  }, [id]);

  const handleSubmit = async (data) => {
    if (id) {
      await updateProduct(id, data);
    } else {
      await createProduct(data);
    }
    navigate("/");
  };

  return (
    <div style={{
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
}}>
      <h2>{id ? "Edit Product" : "Add Product"}</h2>
      <ProductForm initialData={product || {}} onSubmit={handleSubmit} />
    </div>
  );
}

export default AddEditProduct;
