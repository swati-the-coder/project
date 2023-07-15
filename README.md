# Users API

This repository contains an API for managing user data. It allows you to retrieve, create, update, and delete user information. The API is built using Node.js, Express.js, and PostgreSQL.

## Setup

To set up and run the API locally, follow these steps:

### Prerequisites

- Node.js (version 12 or above)
- PostgreSQL (version 9 or above)

### 1. Clone the Repository

Clone the repository to your local machine using the following command:

git clone https://github.com/your-username/users-api.git

bash
Copy code

### 2. Install Dependencies

Navigate to the cloned repository and install the required dependencies by running the following command:

npm install

markdown
Copy code

### 3. Database Configuration

Create a PostgreSQL database and configure the connection in the `db.js` file. Update the `pool` configuration object with your database credentials.

### 4. Environment Variables

Create a `.env` file in the project root directory and provide the following environment variables:

PORT=3000
JWT_SECRET=your_jwt_secret_key

vbnet
Copy code

Replace `your_jwt_secret_key` with your desired JWT secret key for authentication.

### 5. Run Migrations

Run the database migrations to create the necessary tables by executing the following command:

npm run migrate

sql
Copy code

### 6. Start the Server

Start the API server by running the following command:

npm start

sql
Copy code

The server will start running on http://localhost:3000.

## API Endpoints

The following endpoints are available:

- GET /users: Retrieve all users
- GET /users/:id: Retrieve a specific user by ID
- POST /users: Create a new user
- PUT /users/:id: Update an existing user
- DELETE /users/:id: Delete a user

Make requests to these endpoints using a tool like cURL, Postman, or any API testing tool of your choice.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
