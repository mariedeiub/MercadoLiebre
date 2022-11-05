const express = require('express');
const app = express();
const path = require('path');
const index = "./views/home.html"
const register = "./views/register.html"
const login = "./views/login.html"
let PORT = process.env.PORT || 3000;


app.use(express.static('./public'));

app.listen(PORT, () => console.log("Servidor corriendo en el Puerto: " + PORT));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(index));
})

app.get('/home', (req, res) => {
    res.sendFile(path.resolve(index));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(register));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(login));
})

// ERROR 404 Not found
app.get("/*", (req, res) => {
    res.status(404).send("404 - NOT FOUND");
})
