import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  files: [],
  loading: false,
  error: null,
};

const soundSlice = createSlice({
  name: "sounds",
  initialState,
  reducers: {
    uploadStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    uploadSuccess: (state, action) => {
      state.loading = false;
      state.files = action.payload;
    },
    uploadFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { uploadStart, uploadSuccess, uploadFailure } = soundSlice.actions;
export default soundSlice.reducer;

// Асинхронний екшен для завантаження файлу
export const uploadSound = (file) => async (dispatch) => {
  try {
    dispatch(uploadStart());

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:8000/upload/",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    dispatch(uploadSuccess(response.data));
  } catch (error) {
    dispatch(uploadFailure(error.message));
  }
};
