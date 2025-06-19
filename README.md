# Purpose Pay.

## Overview
Purpose Pay is a comprehensive payment application that allows users to manage their wallets, transactions, and more. The application consists of a frontend and a backend, each serving specific roles in the overall functionality.

## Project Structure
- **Frontend**: The user interface where users interact with the application.
- **Backend**: The server-side logic that handles data processing, authentication, and business logic.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or a cloud instance)
- npm or yarn for package management

## Setup Instructions

### Backend Setup
1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd purpose-pay
   ```

2. **Install Dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Environment Configuration**:
   - Create a `.env` file in the `server` directory with the following content:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/purpose-pay
     JWT_SECRET=your_jwt_secret_key
     JWT_EXPIRES_IN=1d
     ```

4. **Build the Project**:
   ```bash
   npm run build
   ```

5. **Start the Server**:
   ```bash
   npm start
   ```

### Frontend Setup
1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../client
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**:
   ```bash
   npm start
   ```

## Running the Application
- **Backend**: The server will run on `http://localhost:5000`.
- **Frontend**: The client will run on `http://localhost:3000`.

## How It Works
- **Frontend**: The frontend is built using React and communicates with the backend via RESTful APIs. It provides a user interface for users to interact with the application, such as managing wallets, viewing transactions, and handling disputes.
- **Backend**: The backend is built using Node.js and Express. It handles requests from the frontend, processes data, interacts with the MongoDB database, and returns responses. The backend also manages authentication, ensuring that only authorized users can access certain features.

## Features
- **User Authentication**: Secure login and registration.
- **Wallet Management**: Link, list, and manage wallets.
- **Transaction Handling**: Send and receive transactions.
- **Dispute Management**: Create and manage disputes.
- **Purpose Allocation**: Allocate funds for specific purposes.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License.
