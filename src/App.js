import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import CartContext from "./context/cart-context";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

const App = () => {
  const { showCart } = useContext(CartContext);

  return (
    <React.Fragment>
      {showCart && <Cart />}
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
