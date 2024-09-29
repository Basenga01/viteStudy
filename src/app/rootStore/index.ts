import { configureStore } from '@reduxjs/toolkit'
import { todolistSlice, userSlice } from "@/entity";
import { useDispatch } from 'react-redux'
import { TaskSlice } from "@/entity/task";

export const rootStore = configureStore({
  reducer: {
    userStore: userSlice.reducer,
    todolistStore: todolistSlice.reducer,
    taskStore: TaskSlice.reducer,
  },
})

export type RootState = ReturnType<typeof rootStore.getState>
export type AppDispatch = typeof rootStore.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()