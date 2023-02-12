# node-api-postgres

## Description

This is a simple API that uses Node.js, Express, and PostgreSQL. It is a simple CRUD API that allows you to create, read, update, and delete users.

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Create a `.env` file in the root directory. The variables you need to add are in the `.env.example` file.
4. Run `npm start` to start the server
5. Go to `http://localhost:3000/` + the endpoint you want to use to test the API. For example:
    1. `http://localhost:3000/users` will return all the users in the database
    2. `http://localhost:3000/users/1` will return the user with the id of 1
6. Go to `http://localhost:3000/api-docs` to view the API documentation.
7. Use curl or Postman to test the API.
    1. To test the API with curl, run the following command in your terminal:
        1. `curl -X GET http://localhost:3000/users`
        2. `curl -X GET http://localhost:3000/users/1`
        3. `curl -X POST http://localhost:3000/users -d '{"name": "John Doe", "email": "test@example.com"}' -H "Content-Type: application/json"`
        4. `curl -X PUT http://localhost:3000/users/1 -d '{"name": "Jane Doe", "email": "test@example.com"}' -H "Content-Type: application/json"`
        5. `curl -X DELETE http://localhost:3000/users/1`
    2. To test the API with Postman, click the button below to import the collection into Postman. Then, click the "Run" button to run the collection.
        1. Create a new collection in Postman
        2. Click the "Import" button
        3. Click the "Link" tab
        4. Paste the following link into the "Enter a URL" field: <https://www.getpostman.com/collections/24015204-7d674b12-a280-4d34-a006-7414f4613e6a>
        5. Click the "Continue" button
        6. Click the "Import" button
        7. Click the "Run" button to run the collection
    Alternatively, you can click the button below to fork the collection into your Postman workspace. Then, click the "Run" button to run the collection.

    [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/24015204-7d674b12-a280-4d34-a006-7414f4613e6a?action=collection%2Ffork&collection-url=entityId%3D24015204-7d674b12-a280-4d34-a006-7414f4613e6a%26entityType%3Dcollection%26workspaceId%3D4c3f7037-923e-4faa-a3fe-2a63c12c05d8)

## TODO List

- [ ] Add tests
- [ ] Add authentication
- [ ] Add authorization
- [ ] Add pagination
- [ ] Add sorting
- [ ] Add filtering
- [ ] Add query parameters

## Contributing

Contributions are welcome! Please create a pull request to contribute to this project
