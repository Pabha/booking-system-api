const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());


let bookings = [];

// GET endpoint to retrieve all bookings
app.get('/api/bookings', (req, res) => {
    res.send('Welcome!!');
    res.json(bookings);
});

// POST endpoint to create a new booking
app.post('/api/bookings', (req, res) => {
    const { name, date, time, guests } = req.body;

    if (!name || !date || !time || !guests) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newBooking = {
        id: bookings.length + 1, 
        name,
        date,
        time,
        guests
    };

    bookings.push(newBooking);
    res.status(201).json(newBooking);
});

// DELETE endpoint to delete a booking by ID
app.delete('/api/bookings/:id', (req, res) => {
    const { id } = req.params;
    const bookingIndex = bookings.findIndex(b => b.id === parseInt(id));

    if (bookingIndex === -1) {
        return res.status(404).json({ error: 'Booking not found' });
    }

    bookings.splice(bookingIndex, 1);
    res.status(204).send(); // No content
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});