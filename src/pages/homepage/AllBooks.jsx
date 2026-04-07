import { use } from "react";
import BookCard from "../../ui/BookCard";

const booksPromiss = fetch("./booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromiss);

    return (
        <div className="mt-10">
            <h2 className="font-bold text-3xl text-center mb-5">Books</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    books.map((book, index) => {
                        return (
                            <BookCard key={index} book={book}/>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AllBooks;