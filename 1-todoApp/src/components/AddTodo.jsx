import { useState } from "react";

function AddTodo({ handleClick }) {
  const [input, setInput] = useState("");
  const [date, setDate] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const handleDateChange = (e) => {
    setDate(e.target.value)
  }

  const handleSubmit = () => {
    handleClick(input, date);
    setInput('');
    setDate('');
  }

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleDateChange} value={date}/>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-button"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
