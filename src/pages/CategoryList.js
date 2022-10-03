import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { getCategory } from "./../redux/actions/getcategory";
const CategoryList = () => {
  const [category, setCategory] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategory(setCategory));
  }, []);
  console.log("category is", category);

  return (
    <div>
      {category.map((item) => (
        <p>{item.TopCategoryName}</p>
      ))}
    </div>
  );
};

export default CategoryList;
