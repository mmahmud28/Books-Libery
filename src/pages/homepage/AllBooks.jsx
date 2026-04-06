import { use } from "react";

const booksPromiss = fetch("./booksData.json").then(res=>res.json()); 

const AllBooks = () => {
    const books = use(booksPromiss);
    console.log(books,"Books");
    
    return (
        <div>
            <h2 className="font-bold text-3xl text-center"></h2>
        </div>
    );
};

export default AllBooks;