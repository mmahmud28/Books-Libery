import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from "../../componets/shared/listedBooks/ListedReadList";
import ListedWishList from "../../componets/shared/listedBooks/ListedWishList";

const Books = () => {

    const [shortingType, setSortingType ] = useState("")
    


    return (
        <div className="my-3 mx-auto">

            <div className="flex justify-center my-3">
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By {shortingType}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> setSortingType ('Pages')}>
                            <a>Pages</a></li>

                        <li onClick={()=> setSortingType  ('Rating')}>
                            <a>Rating</a></li>
                    </ul>
                </div>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read Books List</Tab>
                    <Tab>Wish List Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList shortingType={shortingType} />
                </TabPanel>
                <TabPanel>
                    <ListedWishList shortingType={shortingType} />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;