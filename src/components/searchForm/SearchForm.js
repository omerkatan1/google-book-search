import React from 'react';
import './searchBar.css';


const SearchForm = (props) => {
    return(
        <div className="searchFormWrap">
            <form onSubmit={props.searchBook} action="">
                <input onChange={props.handleSearch} type="text" className="search"></input>
                <button type="submit" className="btn">Search</button>
            </form>
        </div>
    )

}

export default SearchForm;