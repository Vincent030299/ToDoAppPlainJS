const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

let serverAdress = {
    origin: "http://localhost:8081"
  };

app.use(cors(serverAdress));

// Parse the requests to application/json from content-type
app.use(bodyParser.json());

// Parse the requests to application/x-www-form-urlencode from content-type
app.use(bodyParser.urlencoded({ extended: true }));

// The base root
app.get("/", (req,res) => {
    // Return this as a json
    res.json({
        message: "Welcome to the to do app"
    });
});

// Set the port and where the port should listen to 8080
const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Server is  ${port}`);
});