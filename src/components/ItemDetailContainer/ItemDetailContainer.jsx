import {useEffect, useState} from "react";
import {SpinnerLoading} from "../SpinnerLoading/SpinnerLoading";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import {useParams} from "react-router-dom";
import {getFirestore} from "../../firebase/config";

export const ItemDetailContainer= ()=>{
    const [item,setItem] = useState([]);
    const[loading, setLoading] = useState(false);
    const {itemId} = useParams();
    useEffect(()=>{
        setLoading(true);
        const db = getFirestore();
        const products = db.collection('products');
        const item = products.doc(itemId);
        item.get()
            .then((doc)=>{
                setItem({
                    id:doc.id, ...doc.data()
                })
            })
            .catch((err)=>console.error(err))
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