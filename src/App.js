import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';

function App() {
  const [services, setServices] = useState([]);
  useEffect(() => {
      fetch('./fakedata.json')
      .then(res =>res.json())
      .then(data =>setServices(data))
  },[]);
  return (
    <div className="App">
     <Router>
        <Header></Header>
      <Switch>
        <Route exact path ="/">
          <Home services = {services.slice(0,4)}></Home>
        </Route>
         <Route path="/services">
       <Services services = {services}></Services>
         </Route>
         <Route path="/contact">
           <Contact></Contact>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route  path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
      <Footer></Footer>
   </Router>
    
    </div>

  );
}

export default App;
