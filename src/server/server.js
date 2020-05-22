const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001;

app.use(cors());

app.use(bodyParser.json());

let data = [
    {teamname:'LA Lakers', team: 2},
    {teamname:'Chicago Bulls', team: 3}
];

app.use('/api', (req, res)=> res.send(data));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})