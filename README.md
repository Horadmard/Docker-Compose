# d0ck3r Project


API Documentation
Base URL

    http://localhost:8080/auth

1. Signup Endpoint

    URL: /signup

    Method: POST

    Description: Registers a new user.

    Request Body:
        username (string, required): The username of the new user.
        password (string, required): The password of the new user.
        confirmPassword (string, required): The confirmation of the password.
        email (string, optional): The email of the new user.