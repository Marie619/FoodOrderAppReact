import React,{useContext,useEffect,useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
const HeaderCartButton = props =>{


    const[btnIsHighlighted,setButtonIsHighlighted]= useState(false)
    const cartCtx = useContext(CartContext)
    const {items} = cartCtx;
    const numberOfCartItems = items.reduce((currentNumber,item)=>{
        return currentNumber + item.amount;
    },0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : " "}`
    useEffect(()=>{
        if(items.length===0){
            return;
        }
        setButtonIsHighlighted(true);
        const timer = setTimeout(()=>{
            setButtonIsHighlighted(false);
        },300)
        return () =>{
            clearTimeout(timer);
        }

    },[items])

    return <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}


export default HeaderCartButton;