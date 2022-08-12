import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTodoText, setTodos } from "../slicer";

const Todo = ({ item }) => {
    const todos = useSelector(state => state.todoState.todos);
    const todoText = useSelector(state => state.todoState.todoText);
    const liElement = useRef();
    const inputElement = useRef();
    const saveButton = useRef();
    const editButton = useRef();
    const cancelButton = useRef();
    const dispatch = useDispatch();

    const completeHandler = (e) => {
        e.preventDefault();
        let data = todos.map(ele => {
            if (ele.id === item.id) {
                return {
                    ...ele,
                    completed: !ele.completed
                }
            }
            return ele;
        })
        dispatch(setTodos(data));
    }
    const trashHandler = (e) => {
        e.preventDefault();
        let data = todos.filter(ele => {
            return ele.id !== item.id;
        })
        dispatch(setTodos(data));
    }

    const textHandler = (e) => {
        e.preventDefault()
        editButton.current.style.display = "none"
        saveButton.current.style.display = "inline"
        cancelButton.current.style.display = "inline"
        dispatch(setTodoText(e.target.value))
    }
    const editHandler = (e) => {
        e.preventDefault()
        liElement.current.style.display = "none"
        cancelButton.current.style.display = "inline"
        inputElement.current.style.display = "inline"
        dispatch(setTodoText(liElement.current.innerText))

    }
    const cancelHandler = (e) => {
        e.preventDefault()
        liElement.current.style.display = "inline"
        editButton.current.style.display = "inline"
        inputElement.current.style.display = "none"
        saveButton.current.style.display = "none"
        cancelButton.current.style.display = "none"
    }
    const saveHandler = (e) => {
        e.preventDefault()
        liElement.current.style.display = "inline"
        editButton.current.style.display = "inline"
        inputElement.current.style.display = "none"
        saveButton.current.style.display = "none"
        cancelButton.current.style.display = "none"
        let data = todos.map(ele => {
            if (ele.id === item.id) {
                return {
                    ...ele,
                    text: todoText
                }
            }
            return ele;
        })
        dispatch(setTodos(data));
    }
    return (<>
        <div className="todo">
            <li ref={liElement} className={`todo-item ${item.completed ? 'completed' : ''}`}>{item.text}</li>
            <input ref={inputElement} value={todoText} onChange={textHandler} type="text" className="item-input" />
            <button className="complete-btn" onClick={completeHandler}><i className="fas fa-check"></i></button>
            {item.completed ? "" : <button ref={editButton} className="edit-btn" onClick={editHandler}><i className="fas fa-edit"></i></button>}
            <button ref={saveButton} className="save-btn" onClick={saveHandler}><i className="fas fa-save"></i></button>
            <button ref={cancelButton} className="cross-btn" onClick={cancelHandler}><i className="fas fa-undo"></i></button>
            <button className="trash-btn" onClick={trashHandler}><i className="fas fa-trash"></i></button>
        </div>
    </>);
}

export default Todo;