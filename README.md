# REST-API

Express CRUD API project:

```markdown
# Express CRUD API Project

This is a simple Express.js project that provides a CRUD (Create, Read, Update, Delete) API for managing user data. It includes RESTful endpoints for retrieving a list of users, getting a specific user by ID, updating a user, deleting a user, and creating a new user.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js installed on your machine

### Installing

1. Clone the repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd express-crud-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

### Running the Server

Start the Express server using the following command:

```bash
npm start
```

The server will be running on [http://localhost:8000](http://localhost:8000).

## API Endpoints

### Get Users

```http
GET /api/users
```

Retrieve a list of all users.

### Get User by ID

```http
GET /api/users/:id
```

Retrieve a specific user by ID.

### Update User by ID

```http
PATCH /api/users/:id
```

Update a specific user by ID.

### Delete User by ID

```http
DELETE /api/users/:id
```

Delete a specific user by ID.

### Create User

```http
POST /api/users
```

Create a new user.

## Request and Response Examples

### Get Users

#### Request

```http
GET /api/users
```

#### Response

```json
[
  {"id": 1, "first_name": "John", "last_name": "Doe", ...},
  {"id": 2, "first_name": "Jane", "last_name": "Doe", ...},
  ...
]
```

### Get User by ID

#### Request

```http
GET /api/users/1
```

#### Response

```json
{"id": 1, "first_name": "John", "last_name": "Doe", ...}
```

### Update User by ID

#### Request

```http
PATCH /api/users/1
Content-Type: application/json

{
  "first_name": "UpdatedJohn"
}
```

#### Response

```json
{"status": "success", "updatedUser": {"id": 1, "first_name": "UpdatedJohn", "last_name": "Doe", ...}}
```

### Delete User by ID

#### Request

```http
DELETE /api/users/1
```

#### Response

```json
{"status": "success", "deletedUser": {"id": 1, "first_name": "UpdatedJohn", "last_name": "Doe", ...}}
```

### Create User

#### Request

```http
POST /api/users
Content-Type: application/json

{
  "first_name": "NewUser",
  "last_name": "Example",
  ...
}
```

#### Response

```json
{"status": "success", "id": 3}
```

## Built With

- [Express.js](https://expressjs.com/) - Web framework for Node.js
- [fs](https://nodejs.org/api/fs.html) - File system module for Node.js

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.
```

Make sure to replace `<repository-url>` with the actual URL of your Git repository. Update the "Request and Response Examples" section with sample requests and responses for each endpoint.  
