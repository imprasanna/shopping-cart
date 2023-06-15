// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { url } from "./api";
// import jwtDecode from "jwt-decode";

// const initialState = {
//   token: localStorage.getItem("token"),
//   name: "",
//   email: "",
//   _id: "",
//   registerStatus: "",
//   registerError: "",
//   loginStatus: "",
//   loginError: "",
//   userLoaded: false,
// };

// // Action creator using redux thunk
// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (user, { rejectWithValue }) => {
//     // user is the value
//     try {
//       const token = await axios.post(`${url}/register`, {
//         name: user.name,
//         email: user.email,
//         password: user.password,
//       });

//       localStorage.setItem("token", token.data);

//       console.log(token.data);

//       return token.data;
//     } catch (err) {
//       console.log(err);
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     authReducer: () => {},
//   },
//   // builder -> and object provided by redux toolkit
//   extraReducers: (builder) => {
//     builder.addCase(registerUser.pending, (state, action) => {
//       return { ...state, registerStatus: "pending" };
//     });
//     builder.addCase(registerUser.fulfilled, (state, action) => {
//       if (action.payload) {
//         const user = jwtDecode(action.payload);

//         return {
//           ...state,
//           token: action.payload,
//           name: user.name,
//           email: user.email,
//           _id: user._id,
//           registerStatus: "success",
//         };
//       }
//     });
//     builder.addCase(registerUser.rejected, (state, action) => {
//       return {
//         ...state,
//         registerStatus: "rejected",
//         registerError: action.payload,
//       };
//     });
//   },
// });

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
