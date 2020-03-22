import React from 'react';
import axios from 'axios';

import SearchResult from '../searchResult/searchResult';

export default class SearchForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            result: {},
            title: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + this.state.title + '&key=AIzaSyDrZi7mLAWrEG2RqFVwW_PJUeAaqaG6x4M')
        .then(function(res) {


            var allBooks = {};

            allBooks = res.data;

            console.log(allBooks);




        }).catch(err => console.log(err));
    }

    handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);

        this.setState({
            [event.target.name ]: event.target.value
        })
    }


    render() {
        const { title } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="search for a book" name="title" onChange={this.handleChange} />
                    <button>Search</button>

                    <p>Title is {title}</p>
                </form>


                <SearchResult>
                
                </SearchResult>
            </div>
        )
    }
}
