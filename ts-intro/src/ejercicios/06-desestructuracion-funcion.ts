/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc : string,
    precio : number
}

const telefono : Producto = {
    desc : "Nokia A1",
    precio : 150
}

const tablet : Producto = {
    desc : "Ipad Air",
    precio : 350
}

export function calculaISV(productos : Producto[]) : number[] {
    
    let total : number = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos : Producto[] = [telefono, tablet];

const [total, isv] = calculaISV(articulos);

console.log("total: ", total);
console.log("ISV: ", isv);