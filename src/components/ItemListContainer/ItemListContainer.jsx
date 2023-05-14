import {useContext, useEffect, useState} from "react";
import {ItemList} from "../ItemList/ItemList";
import {SpinnerLoading} from "../SpinnerLoading/SpinnerLoading";
import {useParams} from "react-router-dom";
import {UiContext} from "../context/UiContext";
import {getFirestore} from "../../firebase/config";

export const ItemListContainer = ()=>{
    const[items,setItems] = useState([]);
    const{loading,setLoading} = useContext(UiContext);
    const {categoryId}= useParams();
    useEffect(()=>{
        setLoading(true);
        const db= getFirestore();
        const products = categoryId
                        ?db.collection('products').where('category','==', categoryId)
                        :db.collection('products')
                        products.get()
                            .then((res) =>{
                                const newItem = res.docs.map((doc)=>{
                                    return {id: doc.id, ...doc.data()}
                                })
                                setItems(newItem);
                            })
                            .catch((err) =>console.error(err))
                            .finally(() =>{
                                setLoading(false);
                            })
    },[categoryId, setLoading])

    return(
        <div className="mx-5 mt-3">
            {
                loading
                    ?<SpinnerLoading/>
                    :<ItemList products = {items}/>
            }
        </div>
    )
}
