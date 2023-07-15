User Management API
This is a RESTful API for managing users. It allows users to register, authenticate, and perform CRUD operations on user data.

Prerequisites
Before running the API, make sure you have the following installed:

Node.js (v12 or above)
PostgreSQL (v10 or above)
Getting Started
Clone the repository:
shell
Copy code
git clone https://github.com/swati-the-coder/project.git
cd user-management-api
Install the dependencies:
shell
Copy code
npm install
Database Setup:

Create a new PostgreSQL database for the application.

In the project's root directory, create a .env file and update the following environment variables with your database credentials:

makefile
Copy code
DB_HOST=localhost
DB_PORT=5000
DB_NAME=user_management
DB_USER=postgres
DB_PASSWORD=swati123
Run the database migrations:

shell
Copy code
npm run migrate
This will create the necessary tables in the database.

Start the API:
shell
Copy code
npm start
The API will start running on http://localhost:3000.

API Documentation
You can access the Swagger documentation for the API at http://localhost:3000/api-docs.

Testing
To run the unit tests for the API, use the following command:

shell
Copy code
npm test
Usage
You can use tools like Postman to interact with the API endpoints. Here are a few examples:

Register a new user:

Copy code
POST /auth/register
Body: {
"username": "newuser",
"password": "newpassword"
}
Authenticate and generate a JWT token:

Copy code
POST /auth/login
Body: {
"username": "newuser",
"password": "newpassword"
}
Get a list of users:

Copy code
GET /users
Get a specific user by ID:

Copy code
GET /users/:id
Create a new user:

Copy code
POST /users
Body: {
"username": "newuser",
"password": "newpassword"
}
Update an existing user:

Copy code
PUT /users/:id
Body: {
"username": "updateduser",
"password": "updatedpassword"
}
Delete a user:

Copy code
DELETE /users/:id
Make sure to replace :id with the actual ID of the user.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
