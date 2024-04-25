
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { REGISTER_ACTIONS } from "../../actions/actions";
import Axios from "../../config/AxiosIndex";
export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async (data) => {
      try {
        const response = await Axios.post(REGISTER_ACTIONS.register_User, data);
        if (response.status === 201) {
          toast.success(response.data.message);
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