import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slicer";

export default configureStore({
  reducer: {
    todoState: todoReducer,
  },
});
