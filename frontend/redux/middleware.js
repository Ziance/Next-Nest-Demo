import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addCategoryAsync,
  addLocationAsync,
  addProductAsync,
  deleteCategoryAsync,
  deleteLocationAsync,
  deleteProductAsync,
  editCategoryAsync,
  editLocationAsync,
  editProductAsync,
  fetchCategoryAsync,
  fetchCategoryByIdAsync,
  fetchLocationByIdAsync,
  fetchLocationsAsync,
  fetchProductByIdAsync,
  fetchProductsAsync,
} from "./services";

export const fetchCategoryAction = createAsyncThunk(
  "fetchCategoryAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCategoryAsync();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchLocationsAction = createAsyncThunk(
  "fetchLocationsAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchLocationsAsync();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchProductsAction = createAsyncThunk(
  "fetchProductsAction",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchProductsAsync();
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchCategoryByIdAction = createAsyncThunk(
  "fetchCategoryByIdAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchCategoryByIdAsync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchLocationByIdAction = createAsyncThunk(
  "fetchLocationByIdAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchLocationByIdAsync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchProductByIdAction = createAsyncThunk(
  "fetchProductByIdAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchProductByIdAsync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCategoryAction = createAsyncThunk(
  "deleteCategoryAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteCategoryAsync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteLocationAction = createAsyncThunk(
  "deleteLocationAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteLocationAsync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProductAction = createAsyncThunk(
  "deleteProductAction",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteProductAsync(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addCategoryAction = createAsyncThunk(
  "addCategoryAction",
  async (request, { rejectWithValue }) => {
    try {
      console.log("addCategoryAction called");
      const response = await addCategoryAsync(request);
      console.log("addCategoryAction response", response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addLocationAction = createAsyncThunk(
  "addLocationAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await addLocationAsync(request);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addProductAction = createAsyncThunk(
  "addProductAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await addProductAsync(request);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editCategoryAction = createAsyncThunk(
  "editCategoryAction",
  async (request, { rejectWithValue }) => {
    try {
      console.log("editCategoryAction called");
      const response = await editCategoryAsync(request);
      console.log("editCategoryAction response", response);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editLocationAction = createAsyncThunk(
  "editLocationAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await editLocationAsync(request);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editProductAction = createAsyncThunk(
  "editProductAction",
  async (request, { rejectWithValue }) => {
    try {
      const response = await editProductAsync(request);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
