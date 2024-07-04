const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to SQLite database (or create it if it doesn't exist)
const db = new sqlite3.Database('data.db'); // Use ':memory:' for an in-memory database or provide a file name

// Create a table
db.serialize(() => {

});

const corsOptions = {
    origin: '*', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['*'],
};

// Enable CORS for all routes
app.use(cors(corsOptions));

app.post('/registerUser', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    console.log(email);
    console.log(password);
    //console.log(res);
});

app.get('/users', (req, res) => {
    // Assume usersData is an array of objects retrieved from your SQLite database
    const usersData = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        // Add more users as needed
    ];

    // Send back JSON data
    res.json(usersData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
