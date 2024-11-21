import React, { useEffect, useState } from "react";
import BookApi from "../../api/src/api/BookApi";
import Cards from "./Cards";
import { useLocation } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1); // Default to page 1
  const [size, setSize] = useState(10); // Default size per page
  const location = useLocation();

  const pageslide = location.pathname === "/books" ? "books" : "my-books";

  useEffect(() => {
    const bookApi = new BookApi();
    const fetchBooks = async () => {
      try {
        // Create options object to pass to the API method
        const options = { page, size };
        const response = await bookApi.findAllBooks(options);
        setBooks(response.data.content);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchBooks();
  }, [page, size]); // Re-fetch if page or size changes
  console.log("Books data:", books);
  return (
    <div>
      <h1 className="text-4xl">Books List</h1>
      <hr></hr>
      <div className="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6 p-4">
        {books.map((book) => (
          <div key={book.id}>
            <Cards titre={book.title} authorName={book.authorName} isbn={book.isbn} synopsis={book.synopsis} page={pageslide} starCount={4} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
