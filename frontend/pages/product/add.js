import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  addProductAction,
  editProductAction,
  fetchCategoryAction,
  fetchLocationsAction,
  fetchProductByIdAction,
} from "@/redux/middleware";
import { useDispatch, useSelector } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { commonSelector } from "@/redux/commonSlice";

const AddProduct = ({ id }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { categories, locations } = useSelector(commonSelector);

  const [formData, setFormData] = useState(null);

  const handleChange = (e) => {
    setFormData((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newData = {
        ...formData,
        price: parseFloat(formData?.price).toFixed(2),
        stockQuantity: Number(formData?.stockQuantity),
        locationIds: formData?.locationIds?.map((item) => item.id) || [],
        categoryIds: formData?.categoryIds?.map((item) => item.id) || [],
      };

      if (formData?.id) {
        await dispatch(editProductAction(newData)).then(() => {
          router.push("/product");
        });
      } else {
        await dispatch(addProductAction(newData)).then(() => {
          router.push("/product");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSelectCategory = (selectedList) => {
    setFormData((values) => ({
      ...values,
      categoryIds: selectedList,
    }));
  };

  const onRemoveCategory = (selectedList) => {
    setFormData((values) => ({
      ...values,
      categoryIds: selectedList,
    }));
  };

  const onSelectLocation = (selectedList) => {
    setFormData((values) => ({
      ...values,
      locationIds: selectedList,
    }));
  };

  const onRemoveLocation = (selectedList) => {
    setFormData((values) => ({
      ...values,
      locationIds: selectedList,
    }));
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchProductByIdAction(id)).then(({ payload }) => {
        console.log("fetchProductByIdAction payload : ", payload);

        setFormData({
          id: payload?.id,
          productName: payload?.productName,
          productDescription: payload?.productDescription,
          price: payload?.price,
          stockQuantity: payload?.stockQuantity,
          categoryIds: payload?.category || [],
          locationIds: payload?.location || [],
        });
      });
    } else {
      setFormData({
        locationIds: [],
        categoryIds: [],
        productName: "",
        productDescription: "",
        price: "",
        stockQuantity: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    dispatch(fetchLocationsAction());
    dispatch(fetchCategoryAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("categories : ", categories, locations);

  return (
    <div className="min-h-[calc(100vh-108px)] max-w-[1000px] mx-auto p-5">
      <h1 className="text-center text-xl font-bold">
        {formData?.id ? "Edit Product" : "Add New Product"}{" "}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="shadow overflow-hidden max-w-[500px] w-full mx-auto mt-10">
          <div className="px-4 py-5 bg-white">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="w-full">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  id="super-hero"
                  value={formData?.productName}
                  className="p-1 h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-600 rounded-md"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Description
                </label>
                <input
                  type="text"
                  name="productDescription"
                  id="super-hero"
                  value={formData?.productDescription}
                  className="p-1 h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Category
                </label>

                <Multiselect
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                  options={categories}
                  selectedValues={formData?.categoryIds || []}
                  onSelect={onSelectCategory}
                  onRemove={onRemoveCategory}
                  displayValue="categoryName"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="productName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Location
                </label>

                <Multiselect
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                  options={locations}
                  selectedValues={formData?.locationIds || []}
                  onSelect={onSelectLocation}
                  onRemove={onRemoveLocation}
                  displayValue="locationName"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="real-name"
                  value={formData?.price}
                  className="p-1 h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                  onChange={handleChange}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700"
                >
                  Product Quantity
                </label>
                <input
                  type="text"
                  name="stockQuantity"
                  id="real-name"
                  value={formData?.stockQuantity}
                  className="p-1 h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="px-4 pb-5 bg-gray-50 text-center">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-700 focus:ring-offset-2
                focus:bg-blue-700"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
