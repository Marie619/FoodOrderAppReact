import React,{Fragment} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const  App = props => {
  return (
    <div>
      <Fragment>
        <Header />
        <Meals />
      </Fragment>
    </div>
  );
}

export default App;
