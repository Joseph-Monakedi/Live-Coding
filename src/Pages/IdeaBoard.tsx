import { useState } from "react";

function IdeaBoard() {
  const [input, setInput] = useState("");
  const [ideas, SetIdeas] = useState<string[]>([]);

  function handleChange(color: string) {
    setInput(color);
  }

  function handleAddColor(e: React.MouseEvent) {
    e.preventDefault();
    SetIdeas([...ideas, input]);
    setInput("");
  }
  return (
    <div className="p-5">
      <h1 className="font-bold mb-5 text-5xl">IdeaBoard</h1>
      <form className="flex flex-wrap gap-2">
        <textarea
          placeholder="Enter a color"
          value={input}
          name="book"
          onChange={(e) => handleChange(e.target.value)}
          className="textarea"
        ></textarea>
        <div className="flex gap-2 flex-row">
          <button
            onClick={(e) => handleAddColor(e)}
            className="btn btn-primary "
          >
            Add idea
          </button>
        </div>
      </form>
      <ul className="list gap-1">
        {ideas.map((idea, index) => {
          return (
            <li key={index}
            className="list-row">
              
             #{index+1} {idea}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default IdeaBoard;
