import React from "react";
import useForm from "./useForm";
import validate from "./validateSignup";

const SignUp = () => {
  const fields = {
    first_name: "",
    last_name: "",
    dob: ""
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
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={values.first_name}
          onChange={handleChange}
        />
        {errors.first_name && <p className="error">{errors.first_name}</p>}
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={values.last_name}
          onChange={handleChange}
        />
        {errors.last_name && <p className="error">{errors.last_name}</p>}
      </div>
      <div>
        <label>Date of birth</label>
        <input
          type="date"
          name="dob"
          value={values.dob}
          onChange={handleChange}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
