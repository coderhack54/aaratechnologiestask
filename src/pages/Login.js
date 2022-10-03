import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { BASE_URL } from "./../redux/service/baseurl";

const Login = () => {
  //   const dispatch = useDispatch();
  // const loginform = {
  //   name: "",
  //   email: "",
  //   phone: "",
  //   gender: "",
  //   address: "",
  //   password: "",
  // };
  const loginform = {
    CustomerName: "",
    CustomerEmail: "",
    CustomerPhone: "",
    CustomerGender: "",
    CustomerAddress: "",
    CustomerPassword: "",
  };

  const userSubmit = async (data) => {
    // const new_register = data;
    // let config = {
    //   headers: {
    //     apicall: new_register,
    //   },
    // };

    console.log("data", data);
    const response = await axios.post(
      `${BASE_URL}/customer_login.php?apicall=new_register
    `,
      data
    );
    console.log("response from the api is ", response);
  };
  return (
    <div>
      <Formik initialValues={loginform} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="name"
              name="CustomerName"
              onChange={handleChange}
              value={values.CustomerName}
            />
            <input
              type="email"
              placeholder="email"
              name="CustomerEmail"
              onChange={handleChange}
              value={values.CustomerEmail}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="CustomerPhone"
              onChange={handleChange}
              value={values.CustomerPhone}
            />
            <input
              type="text"
              placeholder="Gender"
              name="CustomerGender"
              onChange={handleChange}
              value={values.CustomerGender}
            />
            <input
              type="text"
              placeholder="Address"
              name="CustomerAddress"
              onChange={handleChange}
              value={values.CustomerAddress}
            />
            <input
              type="password"
              placeholder="password"
              name="CustomerPassword"
              onChange={handleChange}
              value={values.CustomerPassword}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
