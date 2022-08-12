import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todoState',
  initialState: {
    todos: [],
    filterTodos: [],
    inputText: "",
    filter: 'all',
    todoText: ""
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    setFilterTodos: (state, action) => {
      state.filterTodos = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    setInputText: (state, action) => {
      state.inputText = action.payload
    },
    setTodoText: (state, action) => {
      state.todoText = action.payload
    }
  },
})

export const { setTodos, setFilterTodos, setFilter, setInputText, setTodoText } = todoSlice.actions

export default todoSlice.reducer