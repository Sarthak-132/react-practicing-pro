import React, { useState } from "react";
import "./Todo.css";
import { TodoFrom } from "./TodoFrom";
import { TodoList } from "./TodoList";
import { TodoTime } from "./TodoTime";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    //to check input empty or not
    if (!content) return;
    // empty input them do not store it

    // if input value already exist then do not store just return it will not store.
    // if (todos.includes(inputValue)) return;

    const ifTodoContentMatched = todos.find(
      (curTodo) => curTodo.content === content
    );
    if (ifTodoContentMatched) return;

    // setTodos((prev) => {
    //   console.log(prev);
    // });
    // in this it will add in console empty array and after that it will add the input value it means that
    // this function has power to store the value of previous value

    setTodos([...todos, { id: id, content: content, checked: checked }]); // previous data keep with it spread operator.
    // setTodos([...todos, { id, content, checked }]);
    //ES6 rule is that if key and value pairs are same them no need to write them twice
  };

  //  Todo date and time

  // console.log();
  // like this if we leave any console it will run continously because of setInterval()that is called leakage of memory
  // to overcome from this problem we use useEffect() hook

  // handleDeleteTodo delete function
  const handleDeleteTodo = (todo) => {
    console.log(todo);
    const updatedTodos = todos.filter((curTodo) => curTodo.content !== todo);
    setTodos(updatedTodos);
  };

  // handleDone function done work
  const handleDone = (done) => {
    const doneWork = todos.map((listTodo) => {
      if (listTodo.content === done) {
        return { ...listTodo, checked: !listTodo.checked };
      } else {
        return listTodo;
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
          <TodoTime />
        </header>

        <TodoFrom onAddTodo={handleFormSubmit} />

        <section className="myUnOrdList">
          <ul>
            {todos.map((todo) => (
              <TodoList
                key={todo.id}
                data={todo.content}
                checked={todo.checked}
                handleDoneCheck={handleDone}
                handleDeleteTodoTask={handleDeleteTodo}
              />
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
