import React from "react";
import { useDispatch } from "react-redux";
import { otplogin } from "./../redux/actions/loginwithotp.";
import { Formik } from "formik";
const Otp = () => {
  const dispatch = useDispatch();
  const otpForm = {
    Mobile: "",
    OTP: "",
  };
  const userSubmit = (data) => {
    console.log("data is data", data);
    dispatch(otplogin(data));
  };
  return (
    <div>
      <Formik initialValues={otpForm} onSubmit={userSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="phone"
              placeholder="enter phone number"
              name="Mobile"
              value={values.Mobile}
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="enter otp"
              name="OTP"
              value={values.OTP}
              onChange={handleChange}
            />

            <button type="submit"> Get Otp</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Otp;
