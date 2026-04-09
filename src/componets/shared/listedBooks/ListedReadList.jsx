import React, { useContext } from 'react';
import { BookContext } from '../../../context/BookContext';
import BookCard from '../../../ui/BookCard';

const ListedReadList = () => {
    const {storedBook} = useContext(BookContext);

    if (storedBook.length==0){
        return(
            <div>
                <h1>No data</h1>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
            storedBook.map((book, key )=> <BookCard key={key} book={book} />)
           }
        </div>
    );
};

export default ListedReadList;