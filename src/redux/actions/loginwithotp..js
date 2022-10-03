import axios from "axios";
import { BASE_URL } from "../service/baseurl";

export const otplogin = (formdata) => async (dispatch) => {
  const response = await axios.post(
    `${BASE_URL}/customer_login.php?apicall=get_otp_verify`,
    formdata
  );
  console.log("response is zzzzzzzzzzzzzzzzz ", response.data[0]);
};
