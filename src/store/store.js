import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Slice/register/authSlice'
import loginReducer from '../Slice/login/loginSlice'
import todosReducer from '../Slice/todo/Todos';

export const store = configureStore({
  reducer: {
      auth:authReducer,
      login:loginReducer,
      createTodos:todosReducer,
      
  },
})