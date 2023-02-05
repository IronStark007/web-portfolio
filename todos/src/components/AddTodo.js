import { useDispatch, useSelector } from "react-redux";
import { setFilter, setInputText, setTodos } from "../slicer";

const AddTodo = () => {
  const inputText = useSelector((state) => state.todoState.inputText);
  const todos = useSelector((state) => state.todoState.todos);
  const filter = useSelector((state) => state.todoState.filter);

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();
    dispatch(setInputText(e.target.value));
    dispatch(setFilter("all"));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Can't add blank todo !!!");
    } else {
      let data = [
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ];
      dispatch(setTodos(data));
      dispatch(setInputText(""));
    }
  };

  const filterHandler = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <form>
        <div className="input">
          <input
            type="text"
            className="todo-input"
            value={inputText}
            onChange={inputHandler}
          />
          <button className="todo-button" type="submit" onClick={submitHandler}>
            <i className="fas fa-plus-square"></i>
          </button>
        </div>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            value={filter}
            onChange={filterHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default AddTodo;
