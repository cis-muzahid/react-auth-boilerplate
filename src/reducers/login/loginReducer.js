import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { LOGIN_ACTIONS } from "../../actions/actions";
import Axios from "../../config/AxiosIndex";
export const fetchloginData = createAsyncThunk(
    "login/fetchloginData",
    async (data) => {
      try {
        const response = await Axios.post(LOGIN_ACTIONS.fetch_loginDetails, data);
        if (response.status === 200) {
          toast.success("User Login Successfully");
          return response.data;
        }
      } catch (error) {
        if (error.response.status === 401) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong! Please try after sometimes");
        }
        throw error;
      }
    }
  );