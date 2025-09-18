// App.js
import React, { useState } from "react";

export default function App() {
  // Initial books state
  const [books, setBooks] = useState([
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "Atomic Habits", author: "James Clear" },
    { id: 3, title: "Ikigai", author: "Héctor García & Francesc Miralles" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add new book
  const handleAddBook = (e) => {
    e.preventDefault();
    if (newTitle.trim() === "" || newAuthor.trim() === "") return;

    const newBook = {
      id: Date.now(),
      title: newTitle,
      author: newAuthor,
    };

    setBooks([...books, newBook]);
    setNewTitle("");
    setNewAuthor("");
  };

  // Remove book by id
  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  // Filter books based on search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">📚 Library Management</h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />

      {/* Book List */}
      <ul className="mb-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <li
              key={book.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>
                <strong>{book.title}</strong> by {book.author}
              </span>
              <button
                onClick={() => handleRemoveBook(book.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No books found.</p>
        )}
      </ul>

      {/* Add Book Form */}
      <form onSubmit={handleAddBook} className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Book Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="p-2 border rounded-md"
        />
        <input
          type="text"
          placeholder="Author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          className="p-2 border rounded-md"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
