import {getAll} from "../src/functions.js";

describe("test de funciones generales",()=>{

    test ("listado de todos los elementos", () => {
        const array1 = ["television", "movil", "microondas"];
        const array2 = [];
        expect(getAll(array1).toEqual("television, movil, microondas"));
        expect(getAll(array2).toEqual(""));
    })

    test ("")





})