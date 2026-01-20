import { Link } from "react-router-dom";

function ProductTable({ products, onDelete }) {
  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead style={{ background: "#f4f8fb" }}>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            const isLowStock = product.quantity < product.threshold;

            return (
              <tr
                key={product._id}
                style={{
                  backgroundColor: isLowStock ? "#fff2f2" : "white",
                }}
              >
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.quantity}</td>
                <td>₹{product.price}</td>
                <td>
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: isLowStock ? "#c0392b" : "#2f6f7e",
                      background: isLowStock ? "#fdecea" : "#e6f2f5",
                    }}
                  >
                    {isLowStock ? "Low Stock" : "In Stock"}
                  </span>
                </td>
                <td style={{ display: "flex", gap: "8px" }}>
                  <Link to={`/edit/${product._id}`} style={styles.editBtn}>
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(product._id)}
                    style={styles.deleteBtn}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  wrapper: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  editBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    background: "#e6f2f5",
    color: "#2f6f7e",
    textDecoration: "none",
    fontSize: "14px",
  },
  deleteBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    background: "#fdecea",
    color: "#c0392b",
    cursor: "pointer",
  },
};

export default ProductTable;
