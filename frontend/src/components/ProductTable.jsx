import { Link } from "react-router-dom";

function ProductTable({ products, onDelete }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table border="1" width="100%" cellPadding="10">
        <thead>
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
                  backgroundColor: isLowStock ? "#ffe5e5" : "white",
                }}
              >
                <td>{product.name}</td>
                <td>{product.sku}</td>
                <td>{product.quantity}</td>
                <td>₹{product.price}</td>
                <td>
                  {isLowStock ? (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                      Low Stock
                    </span>
                  ) : (
                    "OK"
                  )}
                </td>
                <td>
                  <Link to={`/edit/${product._id}`}>Edit</Link>{" "}
                  <button onClick={() => onDelete(product._id)}>
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

export default ProductTable;
