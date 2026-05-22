/**
 * ============================================
 * EXPRESS SERVER WITH MONGODB CONNECTION
 * ============================================
 * This file sets up a basic Express.js server with MongoDB database connection.
 * It demonstrates:
 * - Creating an Express application
 * - Parsing JSON request bodies
 * - Defining GET and POST routes
 * - Connecting to MongoDB using Mongoose
 */

// ============================================
// 1. DEPENDENCIES & SETUP
// ============================================
// Import Express framework for building the web server
const express = require('express')
const app = express()

// Import CORS middleware
const cors = require('cors')

// Import body-parser to parse incoming JSON data from requests
const bodyParser = require('body-parser')

// ============================================
// 2. MIDDLEWARE CONFIGURATION
// ============================================
// Enable CORS
app.use(cors())

// Enable JSON body parsing - converts incoming JSON to JavaScript objects
// This MUST come before route definitions
app.use(bodyParser.json())

// ============================================
// 3. ROUTE DEFINITIONS
// ============================================

/**
 * GET / - Home route
 * Returns a simple greeting message
 * Access: http://localhost:4000/
 */
app.get("/", (req, res) => {
    res.send("hello")
})

/**
 * POST /api/cars - Submit car data
 * Receives car information (name and brand) from request body
 * Logs the data to console and sends confirmation response
 * 
 * Example request body:
 * {
 *   "name": "Civic",
 *   "brand": "Honda"
 * }
 */
app.post("/api/cars", (req, res) => {
    const {name, brand} = req.body
    console.log(name);
    console.log(brand);
    
    res.send("cars successfully submited");
})

// ============================================
// 4. SERVER STARTUP
// ============================================
// Start the Express server on port 4000
app.listen(4000, () => {
    console.log("hello am listeming on the port 4000");
})

// ============================================
// 5. DATABASE CONNECTION
// ============================================
// Import Mongoose for MongoDB object modeling
const mongoose = require('mongoose');

/**
 * Connect to MongoDB database
 * Connection string format: mongodb://host:port/databaseName
 * - localhost: Database is running on this machine
 * - 27017: Default MongoDB port
 * - myDataBase: Name of the database (created automatically if doesn't exist)
 */
mongoose.connect('mongodb://localhost:27017/myDataBase')
    .then(() => {
        console.log('Database connected')
    })
    .catch((error) => {
        console.log("Database connection error:", error.message);
    })
