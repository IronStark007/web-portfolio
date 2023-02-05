import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const filterTodos = useSelector((state) => state.todoState.filterTodos);
  return (
    <>
      <div className="todo-container">
        <ul className="todo-list">
          {filterTodos.map((currentItem) => {
            return <Todo item={currentItem} key={currentItem.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default TodoList;
