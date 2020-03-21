import React from 'react';
import axios from 'axios';

export default class SearchForm extends React.Component {
    state = {
        title: ''
    }

    handleChange = event => {
        this.setState({ title: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        // const book = {
        //     title: this.state.title
        // };

        var URL = "https://www.googleapis.com/books/v1/volumes?q=";
        var APIkey = "&key=AIzaSyDrZi7mLAWrEG2RqFVwW_PJUeAaqaG6x4M";
        var query = this.state.title;

        axios.get(URL + query + APIkey).then(res => {
            console.log(res);
            console.log(res.data);
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Book Search Input:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}