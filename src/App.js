import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";

import searchBody from './components/searchBody/searchBody';
import SearchResult from './components/searchResult/searchResult';



const App = () => (


  <Router>

    <Route path="/" exact component = {searchBody}/>
    <Route path="/" exact component = {SearchResult}/>


  </Router>
);

export default App;
