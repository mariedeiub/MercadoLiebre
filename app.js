const express = require('express');
const app = express();
const path = require('path');
const index = "./views/home.html"
let PORT = 3030;

app.use(express.static('public'));

app.listen(PORT, () => console.log("Servidor corriendo en el puerto: " + PORT));


app.get('/', (req, res) => {
    //res.send("Primer servidor");
    res.sendFile(path.resolve(index));
})

// ERROR 404 Not found
app.get("/*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
})
