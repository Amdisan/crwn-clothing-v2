import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";



const Shop = () => {
  return (

    <h1> I AM THE SHOP PAGE</h1>
  )
}

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={ <Navigation/> }>
        <Route index element={ <Home/> }/>  {/* same as index = {true}, makes this component as home page*/}
        <Route path='/shop' element={ <Shop/> }/>
        <Route path='/authentication' element={ <Authentication/> }/>
      </Route>              
    </Routes>    
  );
};

export default App;
