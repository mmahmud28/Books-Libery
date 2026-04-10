import { useContext, useEffect, useState } from "react";
import { BookContext } from "../../../context/BookContext";
import BookCard from "../../../ui/BookCard";

const ListedWishList = ({ shortingType }) => {
    const { wishList } = useContext(BookContext);

    const [filteredWishList, setFilteredWishList] = useState([]);

    useEffect(() => {
        // যদি wishList না থাকে
        if (!wishList || wishList.length === 0) {
            setFilteredWishList([]);
            return;
        }

        let sortedList = [...wishList];

        if (shortingType === "Pages") {
            sortedList.sort((a, b) => a.totalPages - b.totalPages);
        } else if (shortingType === "Rating") {
            sortedList.sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
        }

        setFilteredWishList(sortedList);
    }, [wishList, shortingType]);

    if (filteredWishList.length === 0) {
        return (
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">No data</h1>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredWishList.map((book) => (
                <BookCard
                    key={book.bookId || book.id}
                    book={book}
                />
            ))}
        </div>
    );
};

export default ListedWishList;