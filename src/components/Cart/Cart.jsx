import {useContext} from "react";
import {CartContext} from "../context/CartContext";
import {Button, Card, CloseButton} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Cart.css"
export const Cart = () =>{
    const {cart,totalPrice, removeItem, emptyCart} = useContext(CartContext)
    return(
        <div>
            {
                cart.length === 0
                ?
                    <h3>Carrito vacio</h3>
                :
                    <>
                        <Card className="text-center">
                            <Card.Header>Resumen de compras</Card.Header>
                            <Card.Body>
                                {
                                    cart.map((product)=> (
                                        <div className="d-flex">
                                            <Card.Img className=" m-1 imgCard" src={product.image}></Card.Img>
                                            <div className="d-flex flex-column">
                                            <Card.Title className="mt-2"  >{product.name}</Card.Title>
                                            <Card.Text className="d-flex justify-content-start mb-0" >$ {product.price}</Card.Text>
                                            <Card.Text className="d-flex justify-content-start mt-2" >{product.counter} unidades</Card.Text>
                                            </div>
                                            <CloseButton className="mx-2 mt-2" onClick={()=> removeItem(product.id)}/>
                                        </div>
                                    ))
                                }

                            </Card.Body>
                            <Card.Footer>
                                <strong>Precio total:$ {totalPrice()}</strong>

                            </Card.Footer>
                        </Card>
                        <div className=" my-2 text-center">
                        <Button className=' mx-2 btn btn-danger' onClick={emptyCart}>Vaciar Carrito</Button>
                        <Link to='/checkout' className='btn btn-success'>
                            Terminar compra
                        </Link>
                            </div>
                </>
            }
        </div>

    )
}