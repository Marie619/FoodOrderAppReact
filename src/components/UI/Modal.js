import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOveryLay = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  const ElementId = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        ElementId
      )}
      {ReactDOM.createPortal(
        <ModalOveryLay>{props.children}</ModalOveryLay>,
        ElementId
      )}
    </Fragment>
  );
};

export default Modal;
