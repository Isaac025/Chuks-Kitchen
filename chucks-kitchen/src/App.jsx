import { useState } from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/welcome";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import YourCart from "./pages/YourCart";
import OrderSummary from "./pages/OrderSummary";
import Delivery from "./pages/Delivery";
import Payment from "./pages/Payment";
import SignIn from "./pages/SignIn";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/food-details/:id" element={<FoodDetails />} />
        <Route path="/your-cart" element={<YourCart />} />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
