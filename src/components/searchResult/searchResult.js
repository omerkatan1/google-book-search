import React, { Component } from 'react';
import request from 'superagent';
import SearchForm from "../../components/searchForm/SearchForm";
import BookList from "../BookList/bookList";


export default class SearchResult extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            input: ''
        }
    }

    searchBook = (event) => {
        event.preventDefault();
        request
            .get("https://www.googleapis.com/books/v1/volumes?")
            .query({ q: this.state.input })
            .then((data) => {
                console.log(data);
                this.setState({ books: [...data.body.items] })
            })
    }

    handleSearch = (event) => {
        this.setState({ input: event.target.value })
    }

    render() {
        return (
            <div>
                <SearchForm searchBook={this.searchBook} handleSearch={this.handleSearch}/>
                <BookList books={this.state.books}/>
            </div>
        )
    }
}