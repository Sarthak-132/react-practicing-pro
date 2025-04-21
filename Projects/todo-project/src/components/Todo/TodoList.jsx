import { MdCheckCircle, MdDeleteForever } from "react-icons/md";

export const TodoList = ({
  data,
  checked,
  handleDoneCheck,
  handleDeleteTodoTask,
}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={() => handleDoneCheck(data)}>
        <MdCheckCircle />
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTodoTask(data)}>
        {/* // this fat arrow function is used when you want to pass an
                  // arguments */}
        <MdDeleteForever />
      </button>
    </li>
  );
};
