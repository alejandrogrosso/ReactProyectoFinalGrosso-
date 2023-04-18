import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import {ItemList} from "../ItemList/ItemList";
import {SpinnerLoading} from "../SpinnerLoading/SpinnerLoading";
import {useParams} from "react-router-dom";

export const ItemListContainer = ()=>{
    const[items,setItems] = useState([]);
    const[loading,setLoading] = useState(false);
    const {categoryId}= useParams();
    useEffect(()=>{
        setLoading(true);
        getProducts()
            .then((res)=>{
                if(categoryId){
                    setItems(res.filter(product=>product.category === categoryId))
                }else{
                    setItems(res);
                }

            })
            .catch((err)=>console.log(err))
            .finally(()=>setLoading(false))

    },[categoryId])

    return(
        <div className="mx-5">
            {
                loading
                    ?<SpinnerLoading/>
                    :<ItemList products = {items}/>
            }
        </div>
    )
}
