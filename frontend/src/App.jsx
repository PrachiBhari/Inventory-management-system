import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AddEditProduct from "./pages/AddEditProduct";
import Reports from "./pages/Reports";
import Header from "./components/Header";
import "./styles/app.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ maxWidth: "1100px", margin: "30px auto", padding: "0 20px" }}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/add" element={<AddEditProduct />} />
          <Route path="/edit/:id" element={<AddEditProduct />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
