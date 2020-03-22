import React from 'react';
import BookCard from '../../components/bookCard/bookCard';

const BookList = (props) => {

    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    return <BookCard 
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.title}
                                author={book.author} 
                                published={book.publishedDate}
                            />
                })
            }
        </div>
    )

}

export default BookList;