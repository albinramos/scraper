import express from "express";
import dotenv from "dotenv";
import session from "express-session";

import router from "./routes/router.js";

dotenv.config();
const app = express();

app.use(express.static("public"));

app.set('views', './src/views');
app.set('view engine', 'pug');


app.get("/",(req,res)=>{
    res.render("home");
});

app.use("/",router);

app.listen(3009,()=>{
    console.log("servidor en marcha en el puerto 3009");
});