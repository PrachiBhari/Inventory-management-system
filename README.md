# Inventory Management System (MERN Stack)

A full-stack Inventory Management System built using the MERN stack.  
This application helps manage products, track stock levels, and generate inventory reports with CSV export functionality.

---

## Live Demo

Frontend (Netlify): https://inventory-management-spotmies.netlify.app/ 
Backend (Render): https:https://inventory-management-system-backend-kh4r.onrender.com

---

## Features

### Product Management (CRUD)
- Add products with name, SKU, quantity, price, and threshold
- View all products in a table
- Edit product details
- Delete products

### Stock Level Alerts
- Automatically identifies low-stock products
- Visual indicators for quick attention
- Dedicated low-stock report page

### Reporting and CSV Export
- View low-stock products in a report table
- Download low-stock inventory as a CSV file
- CSV compatible with Excel and Google Sheets

### Responsive UI
- Dashboard-style layout
- Clean header navigation
- Mobile and desktop friendly design

---

## Tech Stack

### Frontend
- React.js (Vite)
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- csv-writer

### Tools
- Git and GitHub
- Postman
- Netlify (Frontend Deployment)
- Render (Backend Deployment)

---

## Project Structure

inventory-management-system/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── models/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── utils/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── api/
│ │ └── styles/
│ ├── index.html
│ └── package.json
│
└── README.md

---

## Setup Instructions (Local)

### Clone the repository
git clone https://github.com/your-username/inventory-management-system.git

cd inventory-management-system

### Backend setup
cd backend
npm install

Create a `.env` file:
PORT=5000
MONGO_URI=your_mongodb_connection_string

Run backend:npm run dev

### Frontend setup
cd frontend
npm install
npm run dev

---

## Environment Variables

Frontend `.env` file:
VITE_API_URL=http://localhost:5000

Production (Netlify):
VITE_API_URL=https://your-backend-url

---

## API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| POST | /api/products | Create product |
| GET | /api/products | Get all products |
| GET | /api/products/low-stock | Get low stock products |
| PUT | /api/products/:id | Update product |
| DELETE | /api/products/:id | Delete product |
| GET | /api/products/export/csv | Download CSV report |

---

## Example CSV Output
Name,SKU,Quantity,Price
Wireless Mouse,MOU-1002,3,799
USB-C Fast Charger,CHR-1004,2,1299
Bluetooth Headphones,HPH-1006,1,3499


---

## Future Improvements
- Authentication and authorization
- Search and filter products
- Pagination
- Analytics dashboard
- Dark mode

---

## Author

Prachi Bhari  
B.Tech CSE | MERN Stack Developer


