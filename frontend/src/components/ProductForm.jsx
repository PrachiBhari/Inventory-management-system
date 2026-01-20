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
    <form onSubmit={handleSubmit} style={styles.form}>
  <div style={styles.field}>
    <label>Name</label>
    <input name="name" value={form.name} onChange={handleChange} required />
  </div>

  <div style={styles.field}>
    <label>SKU</label>
    <input name="sku" value={form.sku} onChange={handleChange} required />
  </div>

  <div style={styles.row}>
    <div style={styles.field}>
      <label>Quantity</label>
      <input type="number" name="quantity" value={form.quantity} onChange={handleChange} required />
    </div>

    <div style={styles.field}>
      <label>Threshold</label>
      <input type="number" name="threshold" value={form.threshold} onChange={handleChange} />
    </div>
  </div>

  <div style={styles.field}>
    <label>Price</label>
    <input type="number" name="price" value={form.price} onChange={handleChange} required />
  </div>

  <button type="submit" style={styles.btn}>
    Save Product
  </button>
</form>

  );
}
const styles = {
  form: {
    background: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    maxWidth: "500px",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "16px",
  },
  row: {
    display: "flex",
    gap: "16px",
  },
  btn: {
    marginTop: "10px",
    padding: "12px",
    background: "#2f6f7e",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
  },
};


export default ProductForm;
