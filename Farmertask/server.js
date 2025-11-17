const express = require('express');
const urouter = require("../Farmertask/routes/userroute");
const app = express();
const Port = 4141;

app.use(express.json());

app.use('/user', urouter);

app.listen(Port, () =>
    console.log(`Server started at http://localhost:${Port}/user`)
);
