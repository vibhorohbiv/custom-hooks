import React from "react";
import useForm from "./useForm";
import validate from "./validateLogin";

const Login = () => {
  const fields = {
    email: "",
    password: ""
  };

  const { values, handleChange, handleSubmit, errors } = useForm(
    fields,
    submit,
    validate
  );

  function submit() {
    console.log("Successfully submitted");
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
