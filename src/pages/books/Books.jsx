import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../componets/shared/listedBooks/ListedReadList";
import ListedWishList from "../../componets/shared/listedBooks/ListedWishList";

const Books = () => {

    const {storedBook, wishList} = useContext(BookContext);

    

    return (
        <div className="my-3 mx-auto">
            <Tabs>
                <TabList>
                    <Tab>Read Books List</Tab>
                    <Tab>Wish List Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList/>
                </TabPanel>
                <TabPanel>
                    <ListedWishList/>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;