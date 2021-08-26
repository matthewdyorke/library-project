import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import BookList from "./BookList";

export default function BookListEntry({
  id,
  title,
  author,
  isbn,
  checked_out,
  due_date,
  url,
  currentUserId,
  setBooks,
}) {
  const handleCheckout = () => {
    fetch(`http://localhost:8080/books/${id}/checkout/${currentUserId}`, {
      method: "put",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checked_out: currentUserId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card variant="top">
      <Card.Header>{title}</Card.Header>
      <Card.Body>
        <Card.Title>{author}</Card.Title>
        <Card.Text>
          <img src={url} width="300" height="400" />

          <p>{"ISBN : " + isbn}</p>
          <p>checked out by: {checked_out}</p>
        </Card.Text>
        <Button
          onClick={handleCheckout}
          variant={
            checked_out
              ? checked_out === currentUserId
                ? "warning"
                : "danger"
              : "info"
          }
        >
          {checked_out > 0
            ? checked_out === currentUserId
              ? `Click to return. Due by ${due_date}`
              : `Unavailable until ${due_date}`
            : `Click to checkout`}
        </Button>
      </Card.Body>
    </Card>
  );
}
