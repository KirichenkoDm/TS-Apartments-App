import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  QueryParamsInterface,
  ApartmentSliceStateInterface
} from "../../Interfaces";
import { RootState } from "../store";
import {
  createApartmentThunk,
  deleteApartmentByIdThunk,
  editApartmentByIdThunk,
  getAllApartmentsThunk,
  changeStatusApartmentByIdThunk,
  getOccupiedApartmentsThunk
} from "./ApartmentsApi";
import { FetchStatusEnum } from "../../Enums";


const initialState: ApartmentSliceStateInterface = {
  apartmentList: [],
  apartmentQuery: { filterRoomsNumber: 0, sortingDescending: true },
  currentApartments: [],
  fetchStatus: FetchStatusEnum.ready,
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
  reducers: {
    setApartmentQuery: (state, action: PayloadAction<QueryParamsInterface>) => {
      state.apartmentQuery = action.payload;
    },
  },
  extraReducers: function (builder) {
    builder
      //get all
      .addCase(getAllApartmentsThunk.pending, (state) => { state.fetchStatus = FetchStatusEnum.loading; })
      .addCase(getAllApartmentsThunk.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatusEnum.ready;
        state.apartmentList = [...action.payload];
      })
      .addCase(getAllApartmentsThunk.rejected, (state) => { 
        state.fetchStatus = FetchStatusEnum.failed; 
        state.apartmentList = [];
      })
      //get occupied(current)
      .addCase(getOccupiedApartmentsThunk.pending, (state) => { state.fetchStatus = FetchStatusEnum.loading; })
      .addCase(getOccupiedApartmentsThunk.fulfilled, (state, action) => {
        state.fetchStatus = FetchStatusEnum.ready;
        state.currentApartments = [ ...action.payload ];
      })
      .addCase(getOccupiedApartmentsThunk.rejected, (state) => { 
        state.fetchStatus = FetchStatusEnum.failed; 
        state.currentApartments = [];
      })
      //create
      .addCase(createApartmentThunk.pending, (state) => { state.fetchStatus = FetchStatusEnum.loading; })
      .addCase(createApartmentThunk.fulfilled, (state) => { state.fetchStatus = FetchStatusEnum.ready; })
      .addCase(createApartmentThunk.rejected, (state) => { state.fetchStatus = FetchStatusEnum.failed; })
      //edit
      .addCase(editApartmentByIdThunk.pending, (state) => { state.fetchStatus = FetchStatusEnum.loading; })
      .addCase(editApartmentByIdThunk.fulfilled, (state) => { state.fetchStatus = FetchStatusEnum.ready; })
      .addCase(editApartmentByIdThunk.rejected, (state) => { state.fetchStatus = FetchStatusEnum.failed; })
      //delete
      .addCase(deleteApartmentByIdThunk.pending, (state) => { state.fetchStatus = FetchStatusEnum.loading; })
      .addCase(deleteApartmentByIdThunk.fulfilled, (state) => { state.fetchStatus = FetchStatusEnum.ready; })
      .addCase(deleteApartmentByIdThunk.rejected, (state) => { state.fetchStatus = FetchStatusEnum.failed; })
      //change status 
      .addCase(changeStatusApartmentByIdThunk.pending, (state) => { state.fetchStatus = FetchStatusEnum.loading; })
      .addCase(changeStatusApartmentByIdThunk.fulfilled, (state) => { state.fetchStatus = FetchStatusEnum.ready; })
      .addCase(changeStatusApartmentByIdThunk.rejected, (state) => { state.fetchStatus = FetchStatusEnum.failed; });
  }
});

export const { setApartmentQuery } = apartmentsSlice.actions;
export default apartmentsSlice.reducer;

//apartments selectors
export const selectAllApartments = (state: RootState) => state.apartments.apartmentList;
export const selectApartmentQuery = (state: RootState) => state.apartments.apartmentQuery;
export const selectCurrentApartments = (state: RootState) => state.apartments.currentApartments;