
import './App.css';
import { ProductDetails } from './pages/ProductDetails/ProductDetails';
import { Route, Routes } from "react-router-dom"

import ButtonAppBar from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Login } from './pages/Login/Login';
import { RequireAuth } from './hoc/RequireAuth';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />


      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path="/product" element={<RequireAuth> <Products /></RequireAuth>} />
        <Route path="/product/:id" element={<RequireAuth> <ProductDetails /></RequireAuth>} />
      </Routes>

    </div>
  );
}

export default App;
