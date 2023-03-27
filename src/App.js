import { Fragment } from "react";
import News from "./components/news/News";
import Cards from "./components/card/Cards";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Table from './components/table/Tablepage';


function App() {

  return (
   <Fragment>
      <Navbar/>
      <Home/>
      <News/>
      <Table/>
      <Cards/>
   </Fragment>
  );
}

export default App;
