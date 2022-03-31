import React, { useContext } from "react";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import CartContext from "./context/cart-context";
import Footer from "./components/Footer/Footer";

const App = () => {
  const { showCart } = useContext(CartContext);

  return (
    <React.Fragment>
      {showCart && <Cart />}
      <Nav />
      <Menu />
      <Footer />
    </React.Fragment>
  );
};

export default App;
