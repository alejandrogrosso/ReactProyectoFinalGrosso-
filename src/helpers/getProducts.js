import {stock} from "../data/stock";

export const getProducts = ()=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(stock);
            reject("Rechazado")
        },2000)
    })
}