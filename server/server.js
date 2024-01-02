const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch').default;

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.get("/api/getCard/:i", async (req, res) => {
    try {
        const cardNumber = req.params.i;
        
        // Make a request to the external API to get the specific card by number
        const apiUrl = `https://api.swu-db.com/cards/sor/${cardNumber}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        res.json(data); // Send the card data to the client
    } catch (error) {
        console.error('Error fetching the card from the external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
