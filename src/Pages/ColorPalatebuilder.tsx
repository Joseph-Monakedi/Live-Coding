import { useState } from "react";

function ColorPalateBuilder() {
  const [input, setInput] = useState("");
  const [colors, SetColors] = useState<string[]>([]);

  function handleChange(color: string) {
    setInput(color);
  }

  function handleAddColor(e: React.MouseEvent) {
    e.preventDefault();
    SetColors([...colors, input]);
    setInput("");
  }
  return (
    <div className="p-5">
      <h1 className="font-bold mb-5 text-5xl">Color Palatte Builder</h1>
      <form className="flex flex-wrap gap-2">
        <input
          placeholder="Enter a color"
          value={input}
          name="book"
          onChange={(e) => handleChange(e.target.value)}
          className="input input-neutral m"
        ></input>
        <div className="flex gap-2 flex-row">
          <button
            onClick={(e) => handleAddColor(e)}
            className="btn btn-primary "
          >
            Add
          </button>
        </div>
      </form>
      <ul className="list gap-1">
        {colors.map((color, index) => {
          return (
            <li key={index}
            className="list-row">
              <button
                style={{ backgroundColor: color }}
                className="btn btn-ghost"
              />
              {color}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ColorPalateBuilder;
