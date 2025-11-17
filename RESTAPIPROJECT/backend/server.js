const express = require('express');
const userrouter = require("../backend/routes/userroute");
const cors = require('cors');
const app = express();
const Port = 3007;

app.use(express.json());

app.use(cors());

app.use('/user', userrouter);

app.listen(Port, () =>
    console.log(`Server started at http://localhost:${Port}/user`)
);
