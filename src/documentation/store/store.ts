import { configureStore } from '@reduxjs/toolkit';
import { setComponentsGroupIdReducers } from './slices/detector.slices';

export const store = configureStore({
  reducer: {
    componentsGroupId: setComponentsGroupIdReducers,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
