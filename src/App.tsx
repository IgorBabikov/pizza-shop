import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import PizzaInfo from "./components/pizzaInfo/PizzaInfo";
import MaingLayout from "./layout/MaingLayout";



function App() {
  return (
    <Routes>
      <Route path="/" element={<MaingLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="pizza/:id" element={<PizzaInfo/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  );
}

export default App;
