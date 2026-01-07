# MERN Backend - Authentication & Global Search API

This is a sample MERN backend project demonstrating **user authentication** (signup & login) and **global search** on sample data, tested using **Postman**.

---

## 🔹 Technologies Used

- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- Bcrypt for password hashing
- Passport.js for JWT verification
- Postman for API testing

---

## 🔹 Project Structure

New_project1/
│
├── server.js
├── .env
├── models/
│ ├── Users.js # User model
│ └── Data.js # Sample data model
├── routes/
│ ├── authRoutes.js # Signup & Login routes
│ └── dataRoutes.js # Data insertion & search
└── config/
└── passport.js # Passport JWT strategy

yaml
Copy code

---

## 🔹 Environment Variables (.env)

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
ACCESS_TOKEN_SECRET=yourAccessTokenSecret
REFRESH_TOKEN_SECRET=yourRefreshTokenSecret
🔹 APIs Overview
1️⃣ Signup User
URL: POST http://localhost:5000/api/auth/signup

Headers:

Content-Type: application/json

Body (raw JSON):

json
Copy code
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "message": "User registered successfully"
}
2️⃣ Login User
URL: POST http://localhost:5000/api/auth/login

Headers:

Content-Type: application/json

Body (raw JSON):

json
Copy code
{
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy code
{
  "accessToken": "<JWT_ACCESS_TOKEN>",
  "refreshToken": "<JWT_REFRESH_TOKEN>"
}
Use accessToken in Authorization header for protected routes:

makefile
Copy code
Authorization: Bearer <JWT_ACCESS_TOKEN>
3️⃣ Insert Random Sample Data
URL: POST http://localhost:5000/api/data/insert-random

Headers:

Authorization: Bearer <JWT_ACCESS_TOKEN>

Content-Type: application/json

Body: None (data is inserted automatically)

Response:

json
Copy code
{
  "message": "Random data inserted"
}
Sample Data Inserted:

Apple, Laptop, Car, Chair, T-Shirt, Book, Headphones, Coffee, Bicycle, Pen

4️⃣ Global Search Query
URL: GET http://localhost:5000/api/data/search?q=<searchTerm>

Headers:

Authorization: Bearer <JWT_ACCESS_TOKEN>

Query Parameters:

q → Search term (title, description, or category)

Example URL:

bash
Copy code
GET http://localhost:5000/api/data/search?q=tech
Response (JSON array of matching items):

json
Copy code
[
  {
    "_id": "64f2e8b1c5b1a123456789ab",
    "title": "Laptop",
    "description": "Electronics item",
    "category": "Tech",
    "__v": 0
  },
  {
    "_id": "64f2e8b1c5b1a123456789ac",
    "title": "Headphones",
    "description": "Audio device",
    "category": "Tech",
    "__v": 0
  }
]
Notes:

Search is case-insensitive

Searches across title, description, and category

JWT is required

🔹 Postman Testing Flow
Signup → Create a new user

Login → Get accessToken and refreshToken

Insert Random Data → Populate Data collection

Global Search → Test search query using q parameter

🔹 Quick Tips
Always include JWT in Authorization header for protected routes

Use Bearer <accessToken> format

You can test different search terms (apple, tech, food, etc.)

Passwords are hashed using bcrypt

🔹 License
MIT License

yaml
Copy code
