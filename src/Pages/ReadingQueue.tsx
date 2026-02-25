import { useState } from "react";

function ReadingQueue() {
  const [bookList, setBookList] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function handleChange(newInput: string) {
    setInput(newInput);
  }
  function handleAddToBack(e: React.MouseEvent) {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    setBookList([...bookList, input]);
    setInput("");
  }
  function handleAddToFront(e: React.MouseEvent) {
    e.preventDefault();
    if (input.trim().length === 0) {
      return;
    }
    setBookList([input, ...bookList]);
    setInput("");
  }

  return (
    <div className="p-5">
      <h1 className="font-bold mb-5 text-5xl">Reading queue</h1>
      <form className="flex flex-wrap gap-2">
        <input
          placeholder="Enter book name"
          value={input}
          name="book"
          onChange={(e) => handleChange(e.target.value)}
          className="input input-neutral m"
        ></input>
        <div className="flex gap-2 flex-row">
          <button onClick={handleAddToFront} className="btn btn-primary ">
            Add to front
          </button>
          <button onClick={handleAddToBack} className="btn btn-primary ">
            Add to Back
          </button>
        </div>
      </form>
      <ol
      className="list">
        {bookList.map((book, index) => {
          return (
            <li 
            className="list-row"
            key={index}>
              {index + 1}. {book}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default ReadingQueue;
