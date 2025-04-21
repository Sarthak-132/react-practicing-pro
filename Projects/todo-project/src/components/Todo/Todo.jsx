import React, { useEffect, useState } from "react";
import "./Todo.css";
import { MdCheckCircle, MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    // empty input them do not store it

    if (todos.includes(inputValue)) {
      setInputValue("");
      return;
    }
    // if input value already exist then do not store just return it will not store.

    // setTodos((prev) => {
    //   console.log(prev);
    // });
    // in this it will add in console empty array and after that it will add the input value it means that
    // this function has power to store the value of previous value

    setTodos([...todos, inputValue]); // previous data keep with it spread operator.

    setInputValue("");
  };

  //  Todo date and time

  // console.log();
  // like this if we leave any console it will run continously because of setInterval()that is called leakage of memory
  // to overcome from this problem we use useEffect() hook

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // handleDeleteTodo delete function
  const handleDeleteTodo = (todo) => {
    console.log(todo);
    const updatedTodos = todos.filter((curTodo) => curTodo !== todo);
    setTodos(updatedTodos);
  };

  // handleDone function done work
  const handleDone = (done) => {
    console.log(done);
    const doneWork = todos.filter((listTodo) => {
      if (listTodo === done) {
        return;
      }
    });
    setTodos(doneWork);
  };

  const handleClearBtn = () => {
    setTodos([]);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          <h2>{dateTime}</h2>
        </header>
        <section className="form">
          <form onSubmit={handleFormSubmit}>
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <div>
              <button type="submit" className="todo-btn">
                Add task
              </button>
            </div>
          </form>
        </section>
        <section className="myUnOrdList">
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="todo-item">
                <span>{todo}</span>
                <button className="check-btn" onClick={() => handleDone(done)}>
                  <MdCheckCircle />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTodo(todo)}
                >
                  {/* // this fat arrow function is used when you want to pass an
                  // arguments */}
                  <MdDeleteForever />
                </button>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearBtn}>
            Clear ALL
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
