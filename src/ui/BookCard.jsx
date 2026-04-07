import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <div>
            <div className="">
                <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm">
                    <figure className="p-6">
                        <img className="rounded-xl h-62.5"
                            src={book.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <div className="flex items-center gap-3">{book.tags.map((tag, index) => <div key={index} className="badge text-green-500 bg-green-100 font-bold text-sm">{tag}</div>)}</div>
                        <h2 className="card-title font-bold text-2xl">
                            {book.bookName}
                        </h2>
                        <p className="font-semibold text-lg">{book.author}</p>

                        <div className="card-actions justify-between border-t border-dashed pt-5 border-gray-400">
                            <div className="font-semibold">{book.category}</div>
                            <div className="font-semibold flex items-center gap-2">{book.rating} <FaRegStar /> </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BookCard;