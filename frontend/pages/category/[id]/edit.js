import React from "react";
import { useRouter } from "next/router";
import AddCategory from "../add";

const EditCategory = () => {
  const router = useRouter();
  const id = router.query.id;

  return <AddCategory id={id} />;
};

export default EditCategory;
