import React from "react";
import { useRouter } from "next/router";
import AddLocation from "../add";

const EditLocation = () => {
  const router = useRouter();
  const id = router.query.id;

  return <AddLocation id={id} />;
};

export default EditLocation;
