import {Routes, Route } from "react-router-dom";
import {lazy, Suspense} from 'react'
import Home from "./pages/Home";
import MaingLayout from "./layout/MaingLayout";
import Spinner from "./components/spinner/Spinner";

const PizzaInfo = lazy(() => import(/* webpackChunkName: "PizzaInfo" */ '../src/components/pizzaInfo/PizzaInfo'))
const Cart = lazy(() => import(/* webpackChunkName: "Cart" */ '../src/pages/Cart'))
const NotFound = lazy(() => import(/* webpackChunkName: "NotFound" */ '../src/pages/NotFound'))

function App() {
  return (
    <Routes>
      <Route path="/" element={<MaingLayout/>}>
        <Route path="" element={<Home/>}/>
        <Route path="pizza/:id" element={<Suspense><PizzaInfo/></Suspense>}/>
        <Route path="cart" element={<Suspense fallback={<Spinner/>}><Cart/></Suspense>}/>
        <Route path="*" element={<Suspense><NotFound/></Suspense>}/>
      </Route>
    </Routes>
  );
}

export default App;
