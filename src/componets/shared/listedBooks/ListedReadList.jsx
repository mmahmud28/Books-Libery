import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../../context/BookContext';
import BookCard from '../../../ui/BookCard';

const ListedReadList = ({shortingType}) => {
    const {storedBook} = useContext(BookContext);

     const [filteredWishList, setFilteredWishList] = useState([]);
    
        useEffect(() => {
            // যদি wishList না থাকে
            if (!storedBook || storedBook.length === 0) {
                setFilteredWishList([]);
                return;
            }
    
            let sortedList = [...storedBook];
    
            if (shortingType === "Pages") {
                sortedList.sort((a, b) => a.totalPages - b.totalPages);
            } else if (shortingType === "Rating") {
                sortedList.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            }
    
            setFilteredWishList(sortedList);
        }, [storedBook, shortingType]);

    if (filteredWishList.length==0){
        return(
            <div>
                <h1>No data</h1>
            </div>
        )
    }

    return (
        <div className='grid grid-cols-3 gap-5'>
            {
            filteredWishList.map((book, key )=> <BookCard key={key} book={book} />)
           }
        </div>
    );
};

export default ListedReadList;