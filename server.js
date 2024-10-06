// Importing the Express library
const express = require('express');

// Creating an Express application
const app = express();

// Setting the port for the server
const port = 3000;

// Middleware for working with JSON
app.use(express.json());

// Example of a route to confirm changes
app.post('/confirm', ( req, res ) => {
    if ( !req.body || Object.keys(req.body).length === 0) {
        return res.status(400).json({ error: 'There is no data to confirm' });
    }
    console.log( 'Confirmation request received:', req.body );
    // We are returning the confirmation
    res.json({ message: 'Изменение подтверждено'});
});

// Starting the server and listening to the port
app.listen(port, () => {
    console.log( 'The server is running and listening at http://localhost:${port}' );
});