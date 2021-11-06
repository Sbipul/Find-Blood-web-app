import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/AboutUs/About';
import AllBorder from './Pages/AllBorder/AllBorder/AllBorder';
import Details from './Pages/Details/Details';
import Footer from './Pages/Home/Footer/Footer';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/home">
            <Home/>
          </Route>

          <Route path="/about">
            <About/>
          </Route>

          <Route exact path="/all">
            <AllBorder/>
          </Route>

          <Route path="/all/:id">
            <Details/>
          </Route>

        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
