import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import {ItemList} from "../ItemList/ItemList";

export const ItemListContainer = ()=>{
    const[items,setItems] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getProducts()
            .then((res)=>{
                setItems(res)
            })
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))

    },[])

    return(
        <div>
            {
                loading
                    ?<h2>Cargando...</h2>
                    :<ItemList products = {items}/>
            }
        </div>
    )
}
