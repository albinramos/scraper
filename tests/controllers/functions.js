import {createProduct, getAll, getByNombre,updateProduct, removeItem} from "../../src/functions.js";

describe("test de funciones generales",()=>{

    test ("listado de todos los elementos", () => {
        const array1 = ["television", "movil", "microondas"];
        const array2 = [];
        expect(getAll(array1)).toEqual("television, movil, microondas");
        expect(getAll(array2)).toEqual("");
    })

    test ("info por nombre", () =>{
        const array1 = [];
        const array2 = ["melon", "sandia", "manzana"];
        const array3 = ["sandia", "manzana"]
        const nombre = "melon";
        expect(getByNombre(array1,nombre)).toEqual("");
        expect(getByNombre(array2, nombre)).toEqual("melon");
        expect(getByNombre(array3,nombre)).toEqual(undefined);
    })

    test ("crear producto", ()=> {
        const array1 = ["melon", "sandia", "manzana"];
        const nombre = "pera";
        expect(createProduct(nombre,array1)).toEqual(["melon", "sandia", "manzana","pera"]);
    })

    test ("update producto", () => {
        const array = ["melon", "sandia", "manzana"];
        const productoNuevo = "melonmelon";
        const producto = "melon";
        const productNo = "lomo";
        const productoActualizado = "uva";
        expect(updateProduct(array,productoNuevo,producto)).toEqual(["melonmelon", "sandia", "manzana"]);
        expect(updateProduct(array,productNo, productoActualizado)).toEqual(["melon", "sandia", "manzana"]);
        
    })

    test("eliminar producto", () => {
        const array = ["melon", "sandia", "manzana"];
        const productoEliminar = "melon";
        const productoNo = "pera";
        expect(removeItem(array, productoEliminar)).toEqual("Producto melon eliminado");
        expect(removeItem(array, productoNo)).toEqual(array);
    })


})