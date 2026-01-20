import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import AddEditProduct from "./pages/AddEditProduct";
import Reports from "./pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add" element={<AddEditProduct />} />
        <Route path="/edit/:id" element={<AddEditProduct />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
