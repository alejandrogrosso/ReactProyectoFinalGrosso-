import {useContext, useState} from "react";
import {Button, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {CartContext} from "../context/CartContext";
import firebase from "firebase/app";
import 'firebase/firestore'
import {getFirestore} from "../../firebase/config";
import Swal from "sweetalert2";


export const Checkout = ()=>{
    const {cart,totalPrice,emptyCart} = useContext(CartContext);
    const[email,setEmail]= useState("");
    const[name,setName]= useState("");
    const[lastName,setLastName]= useState("");
    const[phone,setPhone]= useState("");
    const handleSubmit =(e)=>{
        e.preventDefault();
        const order = {
            buyer:{
                email,name,lastName,phone
            },
            item : cart,
            totalPrice: totalPrice(),
            data: firebase.firestore.Timestamp.fromDate(new Date())
        }
        const db = getFirestore();
        const orders = db.collection('orders');
        orders.add(order)
            .then((res)=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Su compra fue realizada con exito',
                    text: `Por favor guarde su numero de compra:  ${res.id}`,
                    willClose:() =>{
                        emptyCart();

                    }
                })
            })
            .catch((err) =>console.error(err))
            .finally(() =>{
                console.log('Operacion finalizada con exito');
            })

            cart.forEach((item) =>{
                const docRef = db.collection('products').doc(item.id)
                docRef.get()
                    .then((doc)=>{
                        docRef.update({
                            stock: doc.data().stock -item.counter
                        })
                    })
            })

    }




    return(
        <div>
            <h3 className="text-center">Terminar comprar</h3>
            <hr/>
            <Form onSubmit={handleSubmit} className='container mt-3'>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Ingrese su email" value={email}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control onChange={(e)=>setName(e.target.value)} type="text" placeholder="Ingrese su nombre"value={name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Ingrese su apellido"value={lastName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control onChange={(e)=>setPhone(e.target.value)} type="text" placeholder="Ingrese su telefono" value={phone}/>
                </Form.Group>
                <Button variant="success" type="submit">
                    Finalizar
                </Button>

                <Link to="/cart">
                    <Button  className= "mx-2"  variant="outline-info">
                    Volver al carrito
                    </Button>
                </Link>

            </Form>
        </div>
    )
}