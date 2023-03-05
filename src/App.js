import Home from './pages/home.jsx'
import Product from './pages/product.jsx'
import Cart from './pages/cart.jsx'

import { Routes,Route } from "react-router-dom";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>

    </Routes>
  </>      
  );
}

export default App;
