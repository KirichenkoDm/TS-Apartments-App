import { configureStore } from "@reduxjs/toolkit";
import apartmentsReducer from "./Apartments/ApartmentsSlice";
import { saveCurrentApartment } from "../Utils/LocalStorage";

export const store = configureStore({
  reducer: {
    apartments: apartmentsReducer
  },
});

store.subscribe(()=> {
  saveCurrentApartment(store.getState().apartments.currentApartment._id);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
