import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCategoryAction,
  deleteLocationAction,
  deleteProductAction,
  fetchCategoryAction,
  fetchLocationsAction,
  fetchProductsAction,
} from "./middleware";

const commonSlice = createSlice({
  name: "Common",
  initialState: {
    categories: [],
    products: [],
    locations: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        categories: payload?.data,
      };
    });
    builder.addCase(fetchProductsAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        products: payload?.data,
      };
    });
    builder.addCase(fetchLocationsAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        locations: payload?.data,
      };
    });

    builder.addCase(deleteCategoryAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        categories: [...state.categories].filter(
          (item) => item.id !== payload.id
        ),
      };
    });

    builder.addCase(deleteLocationAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        locations: [...state.locations].filter(
          (item) => item.id !== payload.id
        ),
      };
    });

    builder.addCase(deleteProductAction.fulfilled, (state, { payload }) => {
      return {
        ...state,
        products: [...state.products].filter((item) => item.id !== payload.id),
      };
    });
  },
});

export const commonSelector = (state) => state.Common;

export default commonSlice.reducer;
