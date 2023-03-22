import { Fragment } from "react";
import Buy from "./components/buy/Buy";
import Cards from "./components/card/Cards";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Table from './components/table/Tablepage';


function App() {

  return (
   <Fragment>
      <Navbar/>
      <Home/>
      <Buy/>
      <Table/>
      <Cards/>
   </Fragment>
  );
}

export default App;
