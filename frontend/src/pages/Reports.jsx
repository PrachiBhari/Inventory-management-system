import { useEffect, useState } from "react";
import { getLowStockProducts, downloadCSV } from "../api/productApi";

function Reports() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchLowStock();
  }, []);

  const fetchLowStock = async () => {
    const res = await getLowStockProducts();
    setProducts(res.data);
  };

  const handleDownload = async () => {
    const res = await downloadCSV();
    const blob = new Blob([res.data], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "low-stock-report.csv";
    a.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <div
  style={{
    background: "white",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  }}
>

      <h2>Low Stock Report</h2>

      <button onClick={handleDownload}>
        ⬇️ Download CSV
      </button>

      <table border="1" width="100%" cellPadding="10" style={{ marginTop: "20px" }}>
       <thead style={{ background: "#eaf3f6" }}>

          <tr>
           <th style={{ textAlign: "left", color: "#245a66" }}>
 Name</th>
            <th style={{ textAlign: "left", color: "#245a66" }}>
SKU</th>
            <th style={{ textAlign: "left", color: "#245a66" }}>
Quantity</th>
            <th style={{ textAlign: "left", color: "#245a66" }}>
Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id}>
              <td>{p.name}</td>
              <td>{p.sku}</td>
              <td>{p.quantity}</td>
              <td>₹{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {products.length === 0 && <p>No low-stock products 🎉</p>}
    </div>
  );
}

export default Reports;
