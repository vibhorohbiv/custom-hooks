export default function validate(values) {
  let errors = {};

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = "Email isnt a valid email";
  }

  if (!values.password) {
    errors.password = "Password does not exist";
  } else if (values.password.length < 10) {
    errors.password = "Password isnt strong enough";
  }

  return errors;
}
