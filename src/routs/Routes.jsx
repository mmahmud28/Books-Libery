import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import Books from "../pages/books/Books";
import ErrorPage from "../pages/ErorPage";
import BookDetails from "../bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "/books",
        element: <Books/>
      },
      {
        path:"/bookDetails/:id",
        element: <BookDetails/>,
        loader: ()=> fetch('/booksData.json')
      }
    ], errorElement: <ErrorPage/>
  }
])