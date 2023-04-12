import {Item} from "../Item/Item";

export const ItemList = ({products})=>{
    return(
        <div>
            {products.map((item) =><Item{...item} key={item.id}/>)}
        </div>

    )

}