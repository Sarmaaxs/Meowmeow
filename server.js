require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Mock Data
const MOVIES = [
    { id: 1, title: "Deadpool & Wolverine", overview: "Wolverine joins the merc with a mouth.", poster_path: "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg", release_date: "2024-07-24" },
    { id: 2, title: "Dune: Part Two", overview: "Paul Atreides unites with Chani.", poster_path: "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg", backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg", release_date: "2024-02-27" }
];

app.get('/api/home', (req, res) => {
    res.json({
        hero: MOVIES[0],
        categories: [
            { title: "Trending Now", items: MOVIES },
            { title: "New Releases", items: MOVIES }
        ]
    });
});

app.post('/api/auth/login', (req, res) => {
    res.json({ ok: true, user: { email: req.body.email, name: 'User' }, token: 'demo-token' });
});

app.post('/api/auth/signup', (req, res) => {
    res.json({ ok: true, message: 'User created' });
});

app.listen(4000, () => console.log('Netflix Mock Server running on 4000'));