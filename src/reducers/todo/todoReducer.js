import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { TODO_ACTIONS } from "../../actions/actions";
import Axios from "../../config/AxiosIndex";
export const fetchAllTodosData = createAsyncThunk(
    "todos/fetchAllTodosData",
    async () => {
      try {
        const response = await Axios.get(TODO_ACTIONS.fetch_allTasks);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        toast.error("Something went wrong! Please try after sometimes");
        throw error;
      }
    }
  );
  
  export const fetchOneTodosData = createAsyncThunk(
    "todos/fetchOneTodosData",
    async (id) => {
      try {
        const response = await Axios.get(`${TODO_ACTIONS.fetch_OneTask}${id}`);
        if (response.status === 200) {
          return response.data;
        }
      } catch (error) {
        toast.error("Something went wrong! Please try after sometimes");
        throw error;
      }
    }
  );
  
  export const CreateTodoData = createAsyncThunk(
    "todos/CreateTodoData",
    async (data) => {
      try {
        const response = await Axios.post("", data);
        if (response.status === 201) {
          toast.success(response.data);
        }
      } catch (error) {
        if (error.response.status === 409) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong! Please try after sometimes");
        }
        throw error;
      }
    }
  );
  
  export const UpdateTodoData = createAsyncThunk(
    "todos/UpdateTodoData",
    async (data) => {
      try {
        const response = await Axios.put(`${TODO_ACTIONS.Update_Task}${data?.id}`, data);
        if (response.status === 200) {
          toast.success(response.data.message);
        }
      } catch (error) {
        if (error.response.status === 404) {
          toast.error("Book not found.");
        } else {
          toast.error("Something went wrong! Please try again later.");
        }
        throw error;
      }
    }
  );
  
  export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
    try {
      const response = await Axios.delete(`${TODO_ACTIONS.Delete_Task}${id}`);
      if (response.status === 200) {
        toast.success(response.data);
        return id; // Returning the deleted book ID for further processing if needed
      }
    } catch (error) {
      if (error.response.status === 404) {
        toast.error("Task not found.");
      } else {
        toast.error("Something went wrong! Please try again later.");
      }
      throw error;
    }
  });
  