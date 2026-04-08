import React, { createContext, useState } from 'react';

export const BookContext = createContext();


const BookProvider = ({children}) => {
    const [storedBook, setBook] = useState([]);

    const handleMarkHasRead = (currentBook) => {

        const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            alert("Alrady Add")
        } else {
            setBook([...storedBook, currentBook])
            alert(`${currentBook.bookName} is Added to  list`)
        }


    }


    const bookData= {
        storedBook, setBook, handleMarkHasRead
    }
    return (
        <BookContext.Provider value={bookData}>
             {children}
        </BookContext.Provider>
    );
};

export default BookProvider;