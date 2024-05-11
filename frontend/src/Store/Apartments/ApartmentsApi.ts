import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { RootState } from "../store";
import { ApartmentInterface } from "../../Interfaces";
import { BASE_URL } from "../../Utils/Constants";

export const getAllApartmentsThunk = createAsyncThunk(
  "apartments/getAll",
  async (args, { getState, rejectWithValue }) => {
    try {
      const state = getState() as RootState;
      //generate url
      let url = BASE_URL+"?";
      if (state.apartments.apartmentQuery.filterRoomsNumber > 0) {
        url = url + `rooms=${state.apartments.apartmentQuery.filterRoomsNumber}&`;
      }
      url += state.apartments.apartmentQuery.sortingDescending ? "price=desc" : "price=asc";
      //send request
      const responce = await axios.get(url);

      //handle responce
      return responce.data.apartments as ApartmentInterface[];

    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
        return rejectWithValue(err.response.data.message);
      }
    }
    return rejectWithValue("Apartment Api Error");
  });

export const getOccupiedApartmentsThunk = createAsyncThunk(
  "apartments/getOccupied",
  async (args, {rejectWithValue} ) => {
    try {
      //generate url
      let url = BASE_URL + "/occupied";

      //send request
      const responce = await axios.get(url);
      //handle responce
      return responce.data.apartments as ApartmentInterface[];

    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
        return rejectWithValue(err.response.data.message);
      }
    }
    return rejectWithValue("Apartment Api Error");
  });

export const createApartmentThunk = createAsyncThunk(
  "apartments/create",
  async (newData: ApartmentInterface) => {
    try {
      //generate url
      let url = BASE_URL;

      //send request
      const responce = await axios.post(url, newData);

      //handle responce
      console.log(responce.data.message);

    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
      }
    }
    return {} as ApartmentInterface;
  });

export const editApartmentByIdThunk = createAsyncThunk(
  "apartments/updateById",
  async (newData: ApartmentInterface) => {
    try {
      //generate url
      let url = BASE_URL + "/" + newData._id;

      //send request
      const responce = await axios.put(url, newData);

      //handle responce
      console.log(responce.data.message);

    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
      }
    }
  });

export const deleteApartmentByIdThunk = createAsyncThunk(
  "apartments/deleteById",
  async (_id: string) => {
    try {
      //generate url
      let url = BASE_URL + "/" + _id;
      const responce = await axios.delete(url);

      //handle responce
      console.log(responce.data.message);

    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
      }
    }
  });

export const changeStatusApartmentByIdThunk = createAsyncThunk(
  "apartments/changeStatusById",
  async (newData: ApartmentInterface) => {
    try {
      //generate url
      let url = BASE_URL + "/" + newData._id;

      //send request
      const responce = await axios.patch(url, newData);

      //handle responce
      console.log(responce.data.message);

    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        console.log(err.response.data.message);
      }
    }
  }
)