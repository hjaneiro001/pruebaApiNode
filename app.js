//Frame Work utilits (EXPRESS)
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())

//Import CORS
const cors = require('cors')
app.use(cors())
app.use(express.json())


//Hola Mundo
app.get('/holaMundo', function (req, res) {
    res.json({ msj: "Hello World!" });
})

//Listen Server
app.listen(PORT, () => {
    console.log('escuchando en el puerto', PORT);
});