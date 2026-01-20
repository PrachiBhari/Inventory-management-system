import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Inventory Management</h2>

      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Products</Link>
        <Link to="/add" style={styles.link}>Add Product</Link>
        <Link to="/reports" style={styles.link}>Reports</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    background: "linear-gradient(90deg, #2f6f7e, #245a66)",
    padding: "18px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
  logo: {
    margin: 0,
    fontSize: "22px",
    fontWeight: 600,
  },
  nav: {
    display: "flex",
    gap: "16px",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontWeight: 500,
    padding: "8px 14px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.15)",
  },
};

export default Header;
