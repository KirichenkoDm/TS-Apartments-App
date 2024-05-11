import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import {
  ApartmentInterface,
  QueryParamsInterface,
  ApartmentSliceStateInterface
} from "../../Interfaces";
import { RootState } from "../store";
import {
  createApartmentThunk,
  deleteApartmentByIdThunk,
  editApartmentByIdThunk,
  getAllApartmentsThunk,
  getApartmentByIdThunk
} from "./ApartmentsApi";
import { loadCurrentApartment } from "../../Utils/LocalStorage";

export enum Status {
  ready = "ready",
  loading = "loading",
  failed = "failed",
}


const initialState: ApartmentSliceStateInterface = {
  apartmentList: [],
  apartmentQuery: { filterRoomsNumber: 0, sortingDescending: true },
  currentApartment:
    { _id: loadCurrentApartment() } as ApartmentInterface
    ||
    {} as ApartmentInterface,
  fetchStatus: Status.ready,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    setApartmentQuery: (state, action: PayloadAction<QueryParamsInterface>) => {
      state.apartmentQuery = action.payload;
    },
    createNewApartment: (state, action: PayloadAction<ApartmentSliceStateInterface>) => {
      return action.payload;
    },
    setCurrentApartment: (state, action: PayloadAction<ApartmentInterface>) => {
      state.currentApartment = action.payload;
    }
  },
  extraReducers: function (builder) {
    builder
      //get all
      .addCase(getAllApartmentsThunk.pending, (state) => { state.fetchStatus = Status.loading; })
      .addCase(getAllApartmentsThunk.fulfilled, (state, action) => {
        state.fetchStatus = Status.ready;
        state.apartmentList = [...action.payload];
      })
      .addCase(getAllApartmentsThunk.rejected, (state) => { state.fetchStatus = Status.failed; })
      //get single(current)
      .addCase(getApartmentByIdThunk.pending, (state) => { state.fetchStatus = Status.loading; })
      .addCase(getApartmentByIdThunk.fulfilled, (state, action) => {
        state.fetchStatus = Status.ready;
        state.currentApartment = { ...action.payload };
      })
      .addCase(getApartmentByIdThunk.rejected, (state) => { state.fetchStatus = Status.failed; })
      //create
      .addCase(createApartmentThunk.pending, (state) => { state.fetchStatus = Status.loading; })
      .addCase(createApartmentThunk.fulfilled, (state) => { state.fetchStatus = Status.ready; })
      .addCase(createApartmentThunk.rejected, (state) => { state.fetchStatus = Status.failed; })
      //edit
      .addCase(editApartmentByIdThunk.pending, (state) => { state.fetchStatus = Status.loading; })
      .addCase(editApartmentByIdThunk.fulfilled, (state) => { state.fetchStatus = Status.ready; })
      .addCase(editApartmentByIdThunk.rejected, (state) => { state.fetchStatus = Status.failed; })
      //delete
      .addCase(deleteApartmentByIdThunk.pending, (state) => { state.fetchStatus = Status.loading; })
      .addCase(deleteApartmentByIdThunk.fulfilled, (state) => { state.fetchStatus = Status.ready; })
      .addCase(deleteApartmentByIdThunk.rejected, (state) => { state.fetchStatus = Status.failed; });
  }
});

export const { setApartmentQuery, createNewApartment, setCurrentApartment } = apartmentsSlice.actions;
export default apartmentsSlice.reducer;

//apartments selectors
export const selectAllApartments = (state: RootState) => state.apartments.apartmentList;
export const selectApartmentQuery = (state: RootState) => state.apartments.apartmentQuery;
//no reloading while changing something else in store
export const selectMemorizedCurrentApartment = createSelector(
  (state: RootState) => state.apartments.currentApartment,
  (currentApartment) => currentApartment
);