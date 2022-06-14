import {Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="wrapper">
      <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
     </div>
  );
}

export default App;
