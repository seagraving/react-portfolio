import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
     <Router>
       <Navbar/>
       <Route exact path="/" component={Home}/>
       <Route exact path="/portfolio" component={Portfolio}/>
       <Route exact path="/contact" component={Contact}/>
       <Footer/>
     </Router>
  );
}

export default App;
