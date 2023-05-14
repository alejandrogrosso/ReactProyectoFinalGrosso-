import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import{
    BrowserRouter as Router,
    Routes,
    Navigate,
    Route
} from "react-router-dom";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./components/context/CartContext";
import {Cart} from "./components/Cart/Cart";
import {UiProvider} from "./components/context/UiContext";
import {Checkout} from "./components/Checkout/Checkout";

function App() {

  return (
      <UiProvider>
          <CartProvider>
            <div>
                <Router>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer />}/>
                        <Route path='/products/:categoryId' element={<ItemListContainer />}/>
                        <Route path ="*" element={<Navigate to='/'/> }/>
                        <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                    </Routes>
                </Router>
            </div>
          </CartProvider>
      </UiProvider>
  );

}

export default App;
