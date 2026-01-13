export const checkValidateData = (email, password, name, isSignInForm) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/.test(
      password
    );
  const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
  if (!isSignInForm) {
    if (!name || !isNameValid) {
      return "Name is not valid";
    }
  }
  if (!isEmailValid || !email) return "Email is not valid";
  if (!isPasswordValid || !password) return "Password is not Valid";

  return null;
};
