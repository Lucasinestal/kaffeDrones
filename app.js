const express = require("express");
const app = express();
const port = 5000;

//Development


app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`)
})