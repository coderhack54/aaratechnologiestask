import React from "react";
import { Formik } from "formik";
import axios from "axios";
import { BASE_URL } from "./../redux/service/baseurl";

const Loginuser = () => {
  const loginform = {
    Username: "",
    Password: "",
  };

  const userSubmit = async (data) => {
    console.log("data", data);
    const response = await axios.post(
      `${BASE_URL}/customer_login.php?apicall=login
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
              name="Username"
              onChange={handleChange}
              value={values.Username}
            />
            <input
              type="password"
              placeholder="password"
              name="Password"
              onChange={handleChange}
              value={values.Password}
            />

            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Loginuser;
