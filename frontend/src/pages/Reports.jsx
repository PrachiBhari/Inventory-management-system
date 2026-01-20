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
    <div style={{ padding: "20px" }}>
      <h2>Low Stock Report</h2>

      <button onClick={handleDownload}>
        ⬇️ Download CSV
      </button>

      <table border="1" width="100%" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Price</th>
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
