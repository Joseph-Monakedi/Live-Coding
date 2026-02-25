import { useState } from "react";

function App() {
  const [bookList, setBookList] = useState<string[]>([]);
  const [input, setInput] = useState("");

  function handleChange(newInput:string) {
    setInput(newInput);
  }
  function handleAddToFront(e:React.MouseEvent) {
    e.preventDefault();
    setBookList([
        ...bookList,input
    ]);
}
    function handleAddToBack(e:React.MouseEvent) {
         e.preventDefault();
        setBookList([
            input,
            ...bookList
        ]);
    }

  
  return (
    <>
    <h1>Reading queue</h1>
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
        {bookList.map((book, index)=>{
            return (
                <li>{index+1}. {book}</li>
            )
        })}
      </ol>
    </>
  );
}

export default App;
