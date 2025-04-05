import React,{useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const  App = props => {
const [isCartShown,setIsCartShown] = useState(false);

const showCartHandler = () =>{
  setIsCartShown(true);
}
const hideCartHandler = () =>{
  setIsCartShown(false)
}

  return (
    <div>
      <CartProvider>
         {isCartShown && <Cart  onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <Meals />
      </CartProvider>
    </div>
  );
}

export default App;
