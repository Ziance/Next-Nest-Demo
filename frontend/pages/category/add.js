import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  addCategoryAction,
  editCategoryAction,
  fetchCategoryByIdAction,
} from "@/redux/middleware";
import { useDispatch } from "react-redux";

const AddCategory = ({ id }) => {
  const router = useRouter();
  const dispatch = useDispatch();
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
      if (formData.id) {
        await dispatch(editCategoryAction(formData)).then(() => {
          router.push("/category");
        });
      } else {
        await dispatch(addCategoryAction(formData)).then(() => {
          router.push("/category");
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchCategoryByIdAction(id)).then(({ payload }) => {
        setFormData({
          id: payload?.id,
          categoryName: payload?.categoryName,
          categoryDescription: payload?.categoryDescription,
        });
      });
    } else {
      setFormData({
        categoryName: "",
        categoryDescription: "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log("formData : ", formData);

  return (
      <div className="min-h-[calc(100vh-108px)] max-w-[1000px] mx-auto p-5">
        <h1 className="text-center text-xl font-bold">
          {formData?.id ? "Edit Category" : "Add New Category"}{" "}
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="shadow overflow-hidden max-w-[500px] w-full mx-auto mt-10">
            <div className="px-4 py-5 bg-white">
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="w-full">
                  <label
                    htmlFor="categoryName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Name
                  </label>
                  <input
                    type="text"
                    name="categoryName"
                    id="super-hero"
                    value={formData?.categoryName}
                    className="p-1 h-10 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm border-2 border-slate-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="categoryDescription"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category Description
                  </label>
                  <input
                    type="text"
                    name="categoryDescription"
                    id="real-name"
                    value={formData?.categoryDescription}
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

export default AddCategory;
