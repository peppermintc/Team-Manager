const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001;

app.use(cors());

app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({teamname:'LA Lakers', team: 2}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})