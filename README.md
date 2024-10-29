# Travel Log API

## Description
This project is a backend API for a travel journal application, built with Node.js and Knex.js. It allows users to create diaries and places associated with their travel experiences.

## Table of Contents
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up the Database](#setting-up-the-database)
- [Running Migrations](#running-migrations)
- [Starting the Backend Server](#starting-the-backend-server)
- [API Endpoints](#api-endpoints)
- [Schema Definitions](#schema-definitions)
- [License](#license)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)
- MySql (or your preferred SQL database)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/varshini-sundaribabu/travel_log_backend.git
   cd travel-log
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Setting Up the Database

1. **Create a new database:**
   Open your terminal and run the following command to create a new MySql database named `travel_log`:

   ```sql
   CREATE DATABASE travel_log;
   ```

2. **Configure your database connection:**
   Update your `knexfile.js` with the correct database configuration for your local MySql database. Ensure you set the `database` property to `travel_log`.

### Running Migrations

1. **Run the Knex migrations:**
   Execute the following command to run the migrations and create the necessary tables in your `travel_log` database:

   ```bash
   npx knex migrate:latest
   ```

### Starting the Backend Server

1. **Start the server:**
   Use the following command to start the backend server:

   ```bash
   node index.js
   ```

   The server should start running on the specified port (default is usually 3000). You can now access the API endpoints.



## License
This project is licensed under the MIT License.