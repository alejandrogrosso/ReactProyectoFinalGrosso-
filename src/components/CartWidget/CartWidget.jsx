import { BsCartFill } from 'react-icons/bs';
import {ItemCount} from "../ItemCount/ItemCount";
import{CartContext} from "../context/CartContext";
import {useContext} from "react";
import {Badge} from "react-bootstrap";
import './CartWidget.css'

export const CartWidget = () => {
    const {calculateQuantity} = useContext(CartContext)
    return(


        <div>
          <BsCartFill/>
            <Badge className="navbar_background">
            <span>{calculateQuantity()}</span>
            </Badge>
        </div>

    )
}