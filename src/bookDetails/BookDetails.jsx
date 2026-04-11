import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../context/BookContext';

const BookDetails = () => {

    const { id } = useParams();

    const books = useLoaderData();

    const expectedBooks = books.find((book) => book.bookId == id);


    const { handleMarkHasRead, handleWishList, storedBook, wishList } = useContext(BookContext)
    

    const isRead = storedBook.some(book => book.bookId === expectedBooks.bookId);
    const isWished = wishList.some(book => book.bookId === expectedBooks.bookId);



    return (
        <div className="mt-10 mx-auto">
            <div className="card flex flex-row bg-base-100 shadow-lg hover:shadow-2xl transition duration-300 rounded-2xl">

                {/* Image */}
                <figure className="w-1/2 bg-gray-200 p-4">
                    <img
                        className="rounded-xl h-100"
                        src={expectedBooks.image}
                        alt="Book"
                    />
                </figure>

                {/* Content */}
                <div className="card-body w-1/2 space-y-3">

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-gray-800">
                        {expectedBooks.bookName}
                    </h2>

                    <p className="text-sm text-gray-500">
                        By: <span className="font-semibold">{expectedBooks.author}</span>
                    </p>

                    {/* Category */}
                    <p className="inline-block w-fit px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600 font-semibold">
                        {expectedBooks.category}
                    </p>

                    {/* Review */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {expectedBooks.review}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {expectedBooks.tags.map((tag, ind) => (
                            <span
                                key={ind}
                                className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600 font-medium"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>

                    {/* Info */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t text-sm text-gray-600">
                        <p><span className="font-semibold">Pages:</span> {expectedBooks.totalPages}</p>
                        <p><span className="font-semibold">Publisher:</span> {expectedBooks.publisher}</p>
                        <p><span className="font-semibold">Year:</span> {expectedBooks.yearOfPublishing}</p>
                    </div>

                    {/* Button View */}
                    <div className="pt-3 flex gap-4">
                        <button
                            onClick={() => handleMarkHasRead(expectedBooks)}
                            className={`btn rounded-xl px-6 ${isRead ? "bg-green-500 text-white" : "btn-primary"
                                }`}
                        >
                            {isRead ? "Already Read" : "Mark as Read"}
                        </button>

                        <button
                            onClick={() => handleWishList(expectedBooks)}
                            className={`btn rounded-xl px-6 ${isWished ? "bg-yellow-500 text-white" : "btn-primary"
                                }`}
                        >
                            {isWished ? "In Wishlist" : "Add to Wishlist"}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;