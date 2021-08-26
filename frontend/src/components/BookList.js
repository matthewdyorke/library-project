import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import BookListEntry from "./BookListEntry";
import { Row } from "react-bootstrap";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(1);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const userIdChange = (e) => {
    setCurrentUserId(e.target.value);
  };

  return (
    <Row>
      <select onChange={userIdChange} value={currentUserId}>
        <option value={1} defaultValue>
          1
        </option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
      {books.map((book) => {
        return (
          <BookListEntry
            setBooks={setBooks}
            currentUserId={currentUserId}
            key={uuidv4()}
            {...book}
          />
        );
      })}
    </Row>
  );
}
