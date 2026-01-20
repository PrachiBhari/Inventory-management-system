📦 Inventory Management System (MERN Stack)

A full-stack Inventory Management System built using the MERN stack.
This application allows users to manage products, monitor stock levels, and generate inventory reports with CSV export functionality.
Designed as a clean, responsive, real-world business application.

🚀 Live Demo

Frontend (Netlify): https://inventory-management-spotmies.netlify.app/

Backend (Render): https://inventory-management-system-backend-kh4r.onrender.com

✨ Features
🧾 Product Management (CRUD)

Add new products with:

Name

SKU

Quantity

Price

Stock threshold

View all products in a structured table

Edit product details

Delete products

⚠️ Stock Level Alerts

Automatically detects low-stock products

Visual indicators for low stock

Separate low-stock reporting section

📊 Reporting & CSV Export

View all low-stock products in a report table

Export low-stock inventory as a CSV file

CSV compatible with Excel / Google Sheets

🎨 Clean & Responsive UI

Dashboard-style layout

Attractive header with navigation

Card-based content sections

Fully responsive (desktop & mobile)

🛠️ Tech Stack
Frontend

React.js (Vite)

React Router

Axios

Custom CSS (dashboard styling)

Backend

Node.js

Express.js

MongoDB

Mongoose

csv-writer (CSV export)

Tools & Platforms

Git & GitHub (version control)

Postman (API testing)
inventory-management-system/
│
├── backend/
│   ├── src/
│   │   ├── config/        # Database configuration
│   │   ├── models/        # Mongoose schemas
│   │   ├── controllers/   # Business logic
│   │   ├── routes/        # API routes
│   │   └── utils/         # CSV export helper
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # App pages
│   │   ├── api/           # Axios API configuration
│   │   └── styles/        # Global styles
│   ├── index.html
│   └── package.json
│
└── README.md
⚙️ Setup Instructions (Local Development)
1️⃣ Clone Repository
git clone https://github.com/<your-username>/inventory-management-system.git
cd inventory-management-system
2️⃣ Backend Setup
cd backend
npm install
Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string


Run backend:

npm run dev


Backend runs on:

http://localhost:5000

3️⃣ Frontend Setup
cd ../frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173
🌍 Environment Variables
Frontend
VITE_API_URL=http://localhost:5000
Production (Netlify)
VITE_API_URL=https://<your-backend-name>.onrender.com
🔌 API Endpoints
Method	Endpoint	Description
POST	/api/products	Create product
GET	/api/products	Get all products
GET	/api/products/low-stock	Get low-stock products
PUT	/api/products/:id	Update product
DELETE	/api/products/:id	Delete product
GET	/api/products/export/csv	Export low-stock CSV
📄 Example CSV Output
Name,SKU,Quantity,Price
Wireless Mouse,MOU-1002,3,799
USB-C Fast Charger,CHR-1004,2,1299
Bluetooth Headphones,HPH-1006,1,3499
🚧 Future Enhancements

Authentication & role-based access

Search and filter products

Pagination

Analytics dashboard

Dark mode
👩‍💻 Author

Prachi Bhari
B.Tech CSE | MERN Stack Developer

⭐ Acknowledgements

This project was built as a hands-on exercise to simulate real-world inventory systems and demonstrate full-stack MERN development, deployment, and debugging skills.

Render (backend deployment)

Netlify (frontend deployment)
