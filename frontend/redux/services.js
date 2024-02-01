import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:8888/apis`,
});

export const fetchCategoryAsync = async () => {
  try {
    const response = await axiosInstance.get(`/category`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const fetchLocationsAsync = async () => {
  try {
    const response = await axiosInstance.get(`/locations`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const fetchProductsAsync = async () => {
  try {
    const response = await axiosInstance.get(`/products`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteCategoryAsync = async (id) => {
  try {
    const response = await axiosInstance.delete(`/category/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteLocationAsync = async (id) => {
  try {
    const response = await axiosInstance.delete(`/locations/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const deleteProductAsync = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const addCategoryAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`/category`, request);
    console.log("respons : ", response);
    return response;
  } catch (err) {
    console.log("err : ", err.message);
    return err.response;
  }
};

export const addLocationAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`/locations`, request);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const addProductAsync = async (request) => {
  try {
    const response = await axiosInstance.post(`/products`, request);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const fetchCategoryByIdAsync = async (id) => {
  try {
    const response = await axiosInstance.get(`/category/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const fetchLocationByIdAsync = async (id) => {
  try {
    const response = await axiosInstance.get(`/locations/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const fetchProductByIdAsync = async (id) => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    return response;
  } catch (err) {
    return err.response;
  }
};

export const editCategoryAsync = async (request) => {
  try {
    const response = await axiosInstance.patch(
      `/category/${request.id}`,
      request
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export const editLocationAsync = async (request) => {
  try {
    const response = await axiosInstance.patch(
      `/locations/${request.id}`,
      request
    );
    return response;
  } catch (err) {
    return err.response;
  }
};

export const editProductAsync = async (request) => {
  try {
    const response = await axiosInstance.patch(
      `/products/${request.id}`,
      request
    );
    return response;
  } catch (err) {
    return err.response;
  }
};
