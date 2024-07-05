// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
