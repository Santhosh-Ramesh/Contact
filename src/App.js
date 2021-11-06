import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
import View from './pages/View';
import About from './pages/About';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position="top-center" />
        <Switch>
          <Route exact path="/Contact/" component={Home} />
          <Route path="/Contact/add" component={AddEdit} />
          <Route path="/Contact/update/:id" component={AddEdit} />
          <Route path="/Contact/view/:id" component={View} />
          <Route path="/Contact/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
