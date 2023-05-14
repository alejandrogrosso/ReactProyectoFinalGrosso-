import {Alert, Button, Card, Col, Row} from "react-bootstrap";
import {ItemCount} from "../ItemCount/ItemCount";
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {CartContext} from "../context/CartContext";
import Swal from "sweetalert2";
import './ItemDetail.css'



export const ItemDetail = ({id, description, price, image,category,name, stock}) => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(0);
    const  {addToCart} = useContext(CartContext)
    const addItemToCart = () =>{
        const newItemCart = {
            id,
            description,
            image,
            price,
            category,
            counter,
            name
        }
        addToCart(newItemCart)
        Swal.fire({
            icon: 'success',
            title:'Producto agregado al carrito',
            showConfirmButton:false,
            timer: 1000
        })
        goBack()
    }
    const goBack= ()=>{
        navigate(-1);
    }


    return (
        <div className="item mt-5">
            <div className="container w-75">
                <div className="d-flex">
                    <img className="w-75 h-75" src={image}/>
                    <div className="mt-5">
                        <h1 className="m-5 p-1">{name}</h1>
                        <h3 className="m-5 p-1">$ {price}</h3>
                        <p className="m-5 p-1">{description}</p>
                        {
                            stock > 0
                            ?
                                <>
                                    <ItemCount maxCount={stock} modifyCounter={setCounter} counter={counter}/>
                                    <Button onClick={addItemToCart} variant="outline-success" className="ms-5 mt-5 ">Agregar a carrito</Button>
                                    <Link to='/cart' className='mx-1 mt-5 btn btnGoCart'>
                                        Ir al carrito
                                    </Link>
                                </>
                                :
                                <>
                                    <Alert variant='danger m-5 '>
                                        Producto no disponible
                                    </Alert>
                                    <Link to='/cart' className='ms-5 btn btnGoCart'>
                                        Ir al carrito
                                    </Link>
                                </>
                        }

                    </div>
                </div>
                <Button variant="outline-info" className=" mt-2" onClick={goBack}> Volver</Button>
            </div>
        </div>
    )
}