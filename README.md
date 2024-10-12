# Docker-Compose Project

This project demonstrates how to set up a multi-service environment using Docker Compose. It includes both front-end and back-end services that work together seamlessly.

## Getting Started

To run this project on your local machine, follow the steps below:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/Horadmard/Docker-Compose
```

### 2. Navigate to the Project Directory

Once the repository is cloned, navigate into the project folder:

```bash
cd Docker-Compose
```

### 3. Build and Start the Containers

Use Docker Compose to build and start the containers:

```bash
docker compose up --build
```

This command will build the Docker images and start the services defined in the `docker-compose.yml` file.

### 4. Access the Application

After a few seconds, once the services are running, open your browser and visit:

```
http://localhost:4200
```

You should see the front-end of the application.

## Project Structure

- **Frontend**: Angular application running on port 4200.
- **Backend**: NestJS API that communicates with a PostgreSQL database.

## Requirements

Ensure you have the following installed on your machine before running the project:

- Docker
- Docker Compose

## Troubleshooting

- If you encounter any issues with the services, try restarting the containers:

  ```bash
  docker compose down
  docker compose up --build
  ```

- For database connection errors, ensure that the PostgreSQL service is running and check the environment variables in the `docker-compose.yml` file.

## Contributing

Feel free to open issues or submit pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.
