import {useEffect, useState} from "react";
import {getProducts} from "../../helpers/getProducts";
import {SpinnerLoading} from "../SpinnerLoading/SpinnerLoading";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";

export const ItemDetailContainer= ()=>{
    const [item,setItem] = useState([]);
    const[loading, setLoading] = useState(false);
    const {itemId} = useParams();
    useEffect(()=>{
        setLoading(true);
        getProducts()
        .then(res=>{
            setItem(res.find(product=>product.id === Number(itemId)))
        })
        .catch((err)=>{console.log(err)})
        .finally(()=>{
                setLoading(false);
            })
    },[itemId])
    return(
        <div>
            {
            loading
            ?<SpinnerLoading/>
            :<ItemDetail {... item}/>
            }
        </div>
    )
}