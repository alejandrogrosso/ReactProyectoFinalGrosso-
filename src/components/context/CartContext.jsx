import {createContext, useEffect, useState} from "react";


export const CartContext = createContext();
const init = JSON.parse(localStorage.getItem("cart")) || [];
export const CartProvider = ({children}) =>{
    const [cart, setCart] = useState(init);
    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])
    const addToCart = (item)=>{
        setCart([...cart,item]);
    }
    const calculateQuantity = () =>{
        return cart.reduce((acc,product) => acc + product.counter,0);
    }
    const totalPrice = () =>{
        return cart.reduce((acc,product) => acc + product.price * product.counter,0 );
    }
    const removeItem = (itemId)=>{
        const newCart = cart.filter((product) => product.id !== itemId);
        setCart(newCart);
    }
    const emptyCart = () =>{
        setCart([]);
    }

    return(
        <CartContext.Provider value = {{
            addToCart,
            calculateQuantity,
            totalPrice,
            removeItem,
            cart,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}