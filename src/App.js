import Home from './pages/home.jsx'
import Product from './pages/product.jsx'
import { Routes,Route } from "react-router-dom";

function App() {
  return (
  <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
    </Routes>
  </>      
  );
}

export default App;
