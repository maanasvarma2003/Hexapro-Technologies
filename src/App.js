import './App.css';
import './components/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Body from './components/body';
import About from './components/about';
import Products from './components/products';
import Components from './components/components';
import Clients from './components/clients';
import Contacts from './components/contacts';

function App() {
  return (
    <div className="App">
      <Router>
        {/* Persistent navigation */}
        <Navbar />

        {/* Page Routes */}
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/components">
            <Components />
          </Route>
          <Route exact path="/clients">
            <Clients />
          </Route>
          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </Switch>

        {/* Persistent footer — inside Router for Link support */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
