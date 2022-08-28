//import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
import { Signin } from "./components/Signin";
import Home from "./components/Home";
import {Pricingfn} from "./components/Pricing";






export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
  
  <Route path="/pricing" exact element={<Pricingfn />}></Route>
  
        <Route path="/signin" exact element={<Signin />}></Route>
        <Route path="/signup" exact element={<Signup />}></Route>
        
        
        
      </Routes>
    </div>
  );
}
