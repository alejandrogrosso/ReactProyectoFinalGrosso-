import { BsCartFill } from 'react-icons/bs';
export const CartWidget = () => {
    return(
        <div className="d-flex ">
            <p>0</p>
            <p><BsCartFill/></p>
        </div>
    )
}