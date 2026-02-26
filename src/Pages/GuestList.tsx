import { useState } from "react";

function GuestList() {
  const [input, setInput] = useState("");
  const [guests, SetGuests] = useState<string[]>([]);
  const [warning, setWarning] = useState("");

  function handleChange(input: string) {
    setInput(input);
  }

  function handleInvite(e: React.MouseEvent) {
    if (!input.trim()) {
      setWarning("Please type a name");
    }
    e.preventDefault();
    SetGuests([...guests, input]);
    setInput("");
  }
  return (
    <div className="p-5">
      <h1 className="font-bold mb-5 text-5xl">IdeaBoard</h1>
      <form className="flex flex-wrap gap-2">
        {warning.trim() ? (
          <div className="toast toast-top toast-end alert alert-warning">{warning}</div>
        ) : (
          <></>
        )}
        <input
          placeholder="Enter a color"
          value={input}
          name="book"
          onChange={(e) => handleChange(e.target.value)}
          className="input"
        ></input>
        <div className="flex gap-2 flex-row">
          <button onClick={(e) => handleInvite(e)} className="btn btn-primary ">
            Invite
          </button>
        </div>
      </form>
      <h2>{guests.length} guests</h2>
      <ul className="list gap-1">
        {guests.map((idea, index) => {
          return (
            <li key={index} className="list-row">
              {idea}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default GuestList;
