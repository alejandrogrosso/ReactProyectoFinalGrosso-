import { BsCartFill } from 'react-icons/bs';
import {ItemCount} from "../ItemCount/ItemCount";

export const CartWidget = () => {
    return(
        <div className="d-flex ">
            <p size="lg"><BsCartFill/></p>
        </div>
    )
}