import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/products",
});

export const getProducts = () => API.get("/");
export const getLowStockProducts = () => API.get("/low-stock");
export const createProduct = (data) => API.post("/", data);
export const updateProduct = (id, data) => API.put(`/${id}`, data);
export const deleteProduct = (id) => API.delete(`/${id}`);
export const downloadCSV = () => API.get("/export/csv", { responseType: "blob" });
