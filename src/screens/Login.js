import { useEffect, useRef } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { InputField } from "../components/reusables/InputField/InputField";
import { Link, Redirect } from "react-router-dom";
import { login } from "../redux/user/userActions";

const Login = () => {
  const formRef = useRef();
  const dispatch = useDispatch();

  // VALIDATION
  const validate = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Password is required"),
  });
  const auth = useSelector((state) => state.auth);
  const { errorLogin, userInfo } = auth;
  // Submit
  const onSubmitHandler = (values) => {
    dispatch(login(values.email, values.password));
  };
  return (
    <div className="flex justify-center mt-8 md:mt-0 items-start md:items-center w-screen h-screen relative -top-8">
      <div className="dark:bg-gray-800 dark:text-white bg-white md:w-8/12 w-full px-4 md:px-12 py-24 mb-12">
        <div className="font-bold dark:text-white text-gray-700 text-2xl">Log in</div>
        {/* <p className="text-gray-400">Login with data you entered while registering on website</p> */}
        {errorLogin && <p className="text-red-500">{errorLogin}</p>}
        {userInfo && <Redirect to="/" />}
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          innerRef={formRef}
          validationSchema={validate}
          onSubmit={(values) => {
            onSubmitHandler(values);
          }}
        >
          {(formik) => (
            <>
              <Form>
                <div className="mb-1 mt-8">
                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="mb-1">
                  <InputField
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between">
                  <button type="submit" className="btn-primary">
                    Login to account
                  </button>
                  <Link to="/forgot">
                    <div className="text-sm text-green underline cursor-pointer">
                      Forgot password ?
                    </div>
                  </Link>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
