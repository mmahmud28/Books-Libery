import { h1 } from "framer-motion/client";
import { use } from "react";

const booksPromiss = fetch("./booksData.json").then(res => res.json());

const AllBooks = () => {
    const books = use(booksPromiss);
    console.log(books, "Books");

    return (
        <div>
            <h2 className="font-bold text-3xl text-center"></h2>
            {
                books.map((book) => {
                    return (
                        <div className="card bg-base-100 w-96 shadow-sm">
                            <figure>
                                <img
                                    src={book.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title font-bold text-2xl">
                                    {book.bookName}
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p className="font-semibold text-lg">{book.author}</p>

                                <p>{book.review}</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default AllBooks;