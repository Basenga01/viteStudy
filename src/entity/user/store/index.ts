import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:'user',
  initialState: {
    name: 'Borya',
  },
  reducers: {},
})

export { userSlice }