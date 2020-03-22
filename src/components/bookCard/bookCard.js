import React from 'react';
import './bookCard.css';

const BookCard = (props) => {

    return (
        <div class="bookContainer">
            <img src={props.image} alt=""/>
            <div className="bookDesc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.published}</p>
            </div>

        </div>
    )

}

export default BookCard;