const express = require('express');
const fs = require("fs");
const app = express();
const port = 3000;

// enable static code
app.use(express.static('public'));


app.get('/usuarios', (req, res) =>{
    //  read file synchronously
    let data = fs.readFileSync("personas.json");
    // parse json data
    res.send(JSON.parse(data))

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
