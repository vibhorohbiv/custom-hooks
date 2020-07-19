export default function validate(values) {
  let errors = {};

  if (!values.first_name) {
    errors.first_name = "First Name is required";
  }

  if (!values.last_name) {
    errors.last_name = "Last Name is required";
  }

  if (!values.dob) {
    errors.dob = "Date of birth is required";
  }

  return errors;
}
