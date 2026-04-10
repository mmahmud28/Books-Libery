import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { addAllReadListTolocalDb, getAllReadListFromLocalDb } from '../utils/locab';

export const BookContext = createContext();


const BookProvider = ({ children }) => {
    const [storedBook, setBook] = useState([]);

    const [wishList, setWishList] = useState([]);


    useEffect(() => {
        const storedReadList = getAllReadListFromLocalDb();
        console.log(storedReadList);
        
    }, []);

    const handleMarkHasRead = (currentBook) => {


        addAllReadListTolocalDb(currentBook);

        const isWishList = wishList.find(book => book.bookId == currentBook.bookId);
        if (isWishList) {
            // 👉 remove from wishlist
            const updatedWishList = wishList.filter(
                book => book.bookId !== currentBook.bookId
            );

            setWishList(updatedWishList);
             setBook([...storedBook, currentBook])
            toast.success("Book removed from wishlist!");
            toast.success(`${currentBook.bookName} is Added to List!`)
            return;
        }


        const isExistBook = storedBook.find(book => book.bookId === currentBook.bookId);

        if (isExistBook) {
            toast.error(`${currentBook.bookName} is alrady exist!`);
        } else {
            setBook([...storedBook, currentBook])
            toast.success(`${currentBook.bookName} is Added to List!`)
        }


    }

    const handleWishList = (wishListBook) => {

        const isreadList = storedBook.find(book => book.bookId == wishListBook.bookId);

        if (isreadList) {
            toast.error("This Book is alrady in read list.");
            return;
        }

        const isWishList = wishList.find(book => book.bookId === wishListBook.bookId);

        if (isWishList) {
            toast.error(`${wishListBook.bookName} is alrady exist!`);
        } else {
            setWishList([...wishList, wishListBook])
            toast.success(`${wishListBook.bookName} is Added to Wish List!`)
        }


    }


    const bookData = {
        storedBook, setBook, handleMarkHasRead,
        handleWishList, setWishList, wishList
    }

    return (
        <BookContext.Provider value={bookData}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;