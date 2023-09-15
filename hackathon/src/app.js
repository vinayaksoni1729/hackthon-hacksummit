const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to Carbon Calculator");
});

app.post('/carbon', (req, res) => {
    // Ensure that the request body is parsed correctly
    const requestData = req.body;

    // Loop through the requestData and update the person object
    for (const key in requestData) {
        person[key] = requestData[key];
    }

    const totalCarbonFootPrint = calculateCarbon();
    res.status(200).send({ totalCarbonFootPrint });
});

const carbon = {
    Electricity: 0.85,
    Lpg: 2.983,
    Petrol: 2.296,
    Diesel: 2.653
}

const person = {
    Electricity: 12,
    Lpg: 12,
    Petrol: 12,
    Diesel: 12
}

function calculateCarbon() {
    let totalCarbon = 0;
    for (const key in person) {
        totalCarbon += person[key] * carbon[key];
    }
    return totalCarbon / 1000;
}

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log("Example app listening on port", port);
});
