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

function App() {
  return (
    <div>
        <Router>
            <NavBar/>
            <Routes>
                <Route path='/' element={<ItemListContainer />}/>
                <Route path='/products/:categoryId' element={<ItemListContainer />}/>
                <Route path ="*" element={<Navigate to='/'/> }/>
                <Route path='/detail/:itemId' element={<ItemDetailContainer />}/>
            </Routes>
        </Router>


    </div>
  );
}

export default App;
