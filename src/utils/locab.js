const u5 = () => {

    const allReadList = localStorage.getItem("Readlist from Local Db")
    if (allReadList) {
        return JSON.parse(allReadList);
    } else {
        return [];
    }

}
const addAllReadListTolocalDb = (book) => {
    const allBooks = getAllReadListFromLocalDb();
    if (allBooks) {
        const isExistBook = allBooks.find(b => b.bookId === book.bookId);
        if (!isExistBook) {
           allBooks.push(book);
            localStorage.setItem("Readlist from Local Db", JSON.stringify(allBooks));
        }
    }
    const newBooks = [...allBooks, book];
    localStorage.setItem("Readlist from Local Db", JSON.stringify(newBooks));
}

export { getAllReadListFromLocalDb, addAllReadListTolocalDb };