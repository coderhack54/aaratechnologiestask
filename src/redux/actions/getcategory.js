import axios from "axios";
import { BASE_URL } from "../service/baseurl";

export const getCategory = (setCategory) => async (dispatch) => {
  const response = await axios.get(
    `${BASE_URL}/category/cat_read.php?apicall=category_list`
  );
  console.log("response is zzzzzzzzzzzzzzzzz ", response.data[0]);
  setCategory(response.data[0].data);
};
