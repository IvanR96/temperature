import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://api.weather.gov";

app.use(express.static('public'));


app.get("/", (req, res)=>{
    res.render("index.ejs", { content: "Weather App"});
});


app.listen(port, () =>{
    console.log(`Server running on port ${port}...`);
});