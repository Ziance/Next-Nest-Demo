import React from "react";
import { useRouter } from "next/router";
import AddProduct from "../add";

const EditLocation = () => {
  const router = useRouter();
  const id = router.query.id;

  return <AddProduct id={id} />;
};

export default EditLocation;
