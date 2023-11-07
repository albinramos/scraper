import mongoose from "mongoose";
import db from "../config/db.js";

//creamos schema
const productSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
    precio: Number
})

//creamos el modelo despues del schema

const Product = mongoose.model("Product", productSchema);

export default Product;

