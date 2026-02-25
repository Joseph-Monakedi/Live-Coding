import { useState } from "react";

function App() {
  const [bookList, setBookList] = useState([]);
  const [input, setInput] = useState("");

  function handleChange(newInput) {
    setInput(newInput);
  }
  function handleAddToFront() {
    setBookList(
        ...bookList,input
    )
}
    function handleAddToBack() {
        setBookList(
            input,
            ...bookList
        )
    }

  
  return (
    <>
      <form >
        <input
          placeholder="Enter book name"
          value={input}
          name="book"
          onChange={(e)=>handleChange(e.target.value)}
        ></input>
        <button onClick={handleAddToFront}>
            Add to front
        </button>
        <button onClick={handleAddToBack}>
            Add to Back
        </button>
      </form>
      <ol>
        {bookList.forEach((book)=>{
            return (
                <li>book</li>
            )
        })}
      </ol>
    </>
  );
}

export default App;
