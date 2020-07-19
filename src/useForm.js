import { useState, useEffect } from "react";

const useForm = (fields, callBack, validate) => {
  const [values, setValue] = useState(fields);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callBack();
    }
  }, [errors]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  const handleChange = e => {
    const { name, value } = e.target;
    setValue({ ...values, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return {
    values,
    handleChange,
    handleSubmit,
    errors
  };
};

export default useForm;
