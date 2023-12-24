import { configureStore } from '@reduxjs/toolkit';
import authReducer from '@/redux//authReducer/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  },
});
