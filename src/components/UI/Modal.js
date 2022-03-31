import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../context/cart-context";

const Backdrop = (props) => {
  return (
    <div
      className="fixed inset-0 z-10 h-vw w-full bg-[rgba(0,0,0,0.30)]"
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className={`${props.className} fixed z-10 rounded-lg top-[15vh] left-[34%]  w-[40rem] bg-white`}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  const { showCartHandler } = useContext(CartContext);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={showCartHandler} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default Modal;
