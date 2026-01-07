MERN Authentication & Global Search API
A full-stack MERN backend API featuring JWT-based authentication and global search functionality. Built with Node.js, Express, and MongoDB, this project demonstrates secure user authentication and efficient data querying patterns.

Features

Secure Authentication - JWT-based signup and login with bcrypt password hashing
Protected Routes - Passport.js middleware for route authorization
Global Search - Case-insensitive search across multiple data fields
RESTful Design - Clean API architecture following REST principles


Tech Stack

Runtime: Node.js
Framework: Express.js
Database: MongoDB with Mongoose ODM
Authentication: JWT (JSON Web Tokens)
Security: Bcrypt for password hashing
Authorization: Passport.js with JWT strategy
Testing: Postman


Project Structure
New_project1/
│
├── server.js                 # Application entry point
├── .env                      # Environment configuration
├── models/
│   ├── Users.js             # User schema and model
│   └── Data.js              # Sample data schema
├── routes/
│   ├── authRoutes.js        # Authentication endpoints
│   └── dataRoutes.js        # Data management and search
└── config/
    └── passport.js          # JWT strategy configuration

Setup
Prerequisites

Node.js (v14 or higher)
MongoDB (local or Atlas)
Postman (for API testing)

Installation

Clone the repository

bashgit clone <repository-url>
cd New_project1

Install dependencies

bashnpm install

Configure environment variables

Create a .env file in the root directory:
envPORT=5000
MONGO_URI=mongodb://localhost:27017/your-db
ACCESS_TOKEN_SECRET=yourAccessTokenSecret
REFRESH_TOKEN_SECRET=yourRefreshTokenSecret

Start the server

bashnpm start
The API will be available at http://localhost:5000

API Reference
Authentication
Signup
Create a new user account.
Endpoint: POST /api/auth/signup
Request Body:
json{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:
json{
  "message": "User registered successfully"
}

Login
Authenticate and receive access tokens.
Endpoint: POST /api/auth/login
Request Body:
json{
  "email": "john@example.com",
  "password": "password123"
}
Response:
json{
  "accessToken": "<JWT_ACCESS_TOKEN>",
  "refreshToken": "<JWT_REFRESH_TOKEN>"
}
```

> **Note:** Copy the `accessToken` for use in protected route requests.

---

### Data Operations

All data endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <JWT_ACCESS_TOKEN>
Insert Sample Data
Populate the database with sample data for testing.
Endpoint: POST /api/data/insert-random
Response:
json{
  "message": "Random data inserted"
}
```

**Sample Data Includes:**
Apple, Laptop, Car, Chair, T-Shirt, Book, Headphones, Coffee, Bicycle, Pen

---

#### Global Search
Search across all data fields with case-insensitive matching.

**Endpoint:** `GET /api/data/search?q=<searchTerm>`

**Query Parameters:**
- `q` (required) - Search term to match against title, description, or category

**Example Request:**
```
GET http://localhost:5000/api/data/search?q=tech
Response:
json[
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
Search Capabilities:

Case-insensitive matching
Searches across title, description, and category fields
Returns all matching documents


Testing with Postman
Recommended Testing Flow

Create User - Send signup request to register a new account
Authenticate - Login to receive JWT tokens
Seed Data - Insert sample data using the random data endpoint
Test Search - Query the search endpoint with various terms (e.g., "tech", "food", "apple")

Authorization Setup
For all protected routes:

Select the request in Postman
Go to the Authorization tab
Select Bearer Token as type
Paste your accessToken in the token field


Security Notes

All passwords are hashed using bcrypt before storage
JWT tokens are required for accessing protected routes
Use strong, unique secrets for ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET in production
Never commit .env files to version control
