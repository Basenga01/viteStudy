import { createAsyncThunk } from "@reduxjs/toolkit";
import { DeleteTdlParams, getMyTdl } from "@/entity";
import { apiInstance } from "@/shered";

interface CommonFunction {
  successesCallback: () => void
}

export const deleteTdl = createAsyncThunk<void, DeleteTdlParams & CommonFunction>("todolist/deleteTdlParams",
  async({ todolistId, successesCallback }, { rejectWithValue, dispatch })=>
{
  try {
    await apiInstance.delete(`todolist/${todolistId}`);
    successesCallback()
    dispatch(getMyTdl())

  }catch (e){
    return rejectWithValue(e)
  }
})