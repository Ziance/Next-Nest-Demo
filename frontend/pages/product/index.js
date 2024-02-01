import Link from "next/link";
import React, { useEffect } from "react";
import { deleteProductAction, fetchProductsAction } from "@/redux/middleware";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector } from "@/redux/commonSlice";
import moment from "moment";

const Product = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(commonSelector);

  useEffect(() => {
    dispatch(fetchProductsAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-[calc(100vh-100px)] p-5">
      <div className="flex justify-between">
        <h1 className="text-center text-3xl font-bold">Product</h1>
        <Link href={`/product/add`}>
          <button
            type="button"
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add New
          </button>
        </Link>
      </div>

      <div className="flex gap-5 flex-wrap mt-2 justify-center">
        <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Locations
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  created At
                </th>
                <th scope="col" className="px-6 py-3">
                  updated At
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((row, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {row.productName}
                  </th>
                  <td className="px-6 py-4">
                    {row?.location?.map((item, index) => (
                      <p key={index}>{item.locationName}</p>
                    ))}
                  </td>
                  <td className="px-6 py-4">
                    {row?.category?.map((item, index) => (
                      <p key={index}>{item.categoryName}</p>
                    ))}
                  </td>
                  <td className="px-6 py-4">{row.price}</td>
                  <td className="px-6 py-4">{row.stockQuantity}</td>
                  <td className="px-6 py-4">
                    {moment(row.createdAt).format("DD-MM-YYYY hh:mm A ")}
                  </td>
                  <td className="px-6 py-4">
                    {moment(row.updatedAt).format("DD-MM-YYYY hh:mm A ")}
                  </td>
                  <td className="px-6 py-4 flex-wrap text-right">
                    <Link key={row.id} href={`/product/${row.id}/edit`}>
                      <button
                        type="button"
                        className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Edit
                      </button>
                    </Link>

                    <button
                      onClick={() => dispatch(deleteProductAction(row.id))}
                      type="button"
                      className="px-3 ml-1 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
