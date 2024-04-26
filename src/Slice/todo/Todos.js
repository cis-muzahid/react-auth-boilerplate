import { createSlice } from "@reduxjs/toolkit";
import { CreateTodoData, deleteTodo, fetchAllTodosData, fetchOneTodosData, UpdateTodoData } from "../../reducers/todo/todoReducer";

const initialState = {
  userData: null,
  OneUsersData: [],
  loading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(CreateTodoData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CreateTodoData.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(CreateTodoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //fetch All-books
      .addCase(fetchAllTodosData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTodosData.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(fetchAllTodosData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //fetch task individually
      .addCase(fetchOneTodosData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOneTodosData.fulfilled, (state, action) => {
        state.loading = false;
        state.OneUsersData = action.payload;
      })
      .addCase(fetchOneTodosData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //patch
      .addCase(UpdateTodoData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UpdateTodoData.fulfilled, (state, action) => {
        state.loading = false;
      })

      .addCase(UpdateTodoData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //delete
      .addCase(deleteTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = state.userData.filter(
          (obj) => obj.id !== action.payload
        );
      })

      .addCase(deleteTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default todoSlice.reducer;
