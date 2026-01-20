import { useState, useEffect } from "react";

function ProductForm({ initialData = {}, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    sku: "",
    quantity: "",
    price: "",
    threshold: "",
  });

  useEffect(() => {
    if (initialData._id) {
      setForm(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="sku" placeholder="SKU" value={form.sku} onChange={handleChange} required />
      <input name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
      <input name="threshold" type="number" placeholder="Threshold" value={form.threshold} onChange={handleChange} />
      <button type="submit">Save</button>
    </form>
  );
}

export default ProductForm;
