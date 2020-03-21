import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";

import searchBody from './components/searchBody/searchBody';
import SearchForm from './components/searchForm/SearchForm';


const App = () => (


  <Router>

    <Route path="/" exact component = {searchBody}/>
    <Route path="/" exact component = {SearchForm}/>

  </Router>
);

export default App;
