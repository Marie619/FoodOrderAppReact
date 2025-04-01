import React,{Fragment,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

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
      <Fragment>
         {isCartShown && <Cart  onHideCart={hideCartHandler}/>}
        <Header onShowCart={showCartHandler}/>
        <Meals />
      </Fragment>
    </div>
  );
}

export default App;
