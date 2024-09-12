import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import ExploreMenu from './Components/ExploreMenu';
import Footer from './Pages/Footer';
import Custumer from "./Pages/Custumer";
import FoodDetails from "./Pages/FoodDetails";
import Sign_in from './Pages/Sign_in';
import Login from "./Pages/Login";
import Menubuttons from './Pages/Menubuttons';
import Buttons from './Pages/Buttons';
import ShoppingCart from './Pages/ShoppingCart';
import Home1 from './Pages/Home1';
import { useCart } from '../src/Pages/CartContext';
import { CartProvider } from "../src/Pages/CartContext"
import Addreview from './Pages/Addreview';
import Payment from "./Pages/Payment"
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <CartProvider>
      {/* <ToastContainer position="top-center" autoClose={2000} /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home1 />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/exploremenu' element={<ExploreMenu />} />
          <Route path='/navbar' element={<Navbar />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/customer' element={<Custumer />} />
          <Route path='/fooddetails' element={<FoodDetails />} />
          <Route path='/signin' element={<Sign_in />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menubuttons1' element={<Menubuttons />} />
          <Route path='/menubuttons2' element={<Buttons />} />
          <Route path='/contactdetails' element={<Contact />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/addreview' element={<Addreview />} />
          <Route path='/payment' element={<Payment />} />

        </Routes>
      
      </BrowserRouter>
    </CartProvider>
    
  );
}

export default App;
