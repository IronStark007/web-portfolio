import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './components/AddTodo';
import HeadLine from './components/HeadLine';
import TodoList from './components/TodoList';
import { setFilterTodos, setTodos } from './slicer';

function App() {
  const todos = useSelector(state => state.todoState.todos)
  const filter = useSelector(state => state.todoState.filter)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!localStorage.getItem('todos')) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let data = localStorage.getItem('todos');
      dispatch(setTodos(JSON.parse(data)));
    }
  }, [dispatch])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    switch (filter) {
      case 'completed':
        var data = todos.filter(ele => {
          return ele.completed;
        })
        dispatch(setFilterTodos(data));
        break;
      case 'uncompleted':
        data = todos.filter(ele => {
          return !ele.completed;
        })
        dispatch(setFilterTodos(data));
        break;
      default:
        dispatch(setFilterTodos(todos));
        break;
    }
  }, [filter, todos, dispatch])
  return (
    <div>
      <HeadLine />
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
