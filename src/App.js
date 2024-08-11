import './App.css';
import Navbar from './components/Navbar';
import './components/style.css'
import Footer from'./components/footer';
import Body from './components/body';
import About from './components/about';
import Products from "./components/products"
import Components from './components/components';
import Clients from './components/clients';
import Contacts from './components/contacts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} 
from "react-router-dom";
function App() 
{
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <div>
      <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route key="about"exact path="/about">
           <About /> 
          </Route>
          <Route key="products"exact path="/products">
           <Products /> 
          </Route>
          <Route key="components"exact path="/components">
           <Components /> 
          </Route>
          <Route key="clients"exact path="/clients">
           <Clients /> 
          </Route>
          <Route key="contacts"exact path="/contacts">
           <Contacts/>
          </Route>

        </Switch>
      </div>
    </Router>
      <Footer/>
    </div>
  );
}
export default App;
