export default function hasError(errors) {
  for (let error in errors) {
    if (errors.hasOwnProperty(error) && errors[error] === true) {
      return true; 
    }
  }
  
  return false;
}