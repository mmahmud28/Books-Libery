import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';

const Books = () => {

    const {storedBook} = useContext(BookContext)

    console.log(storedBook);

    return (
        <div>
             <h1>Books</h1>
        </div>
    );
};

export default Books;