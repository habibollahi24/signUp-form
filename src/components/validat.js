export const validation = (data, type) => {
  const errors = {};
  if (data.name.trim() === "") {
    errors.nameValid = "enter your name";
  }
  if (data.email === "") {
    errors.emailValid = "enter your email";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.emailValid = "enter a valid email";
  }
  if (data.password === "") {
    errors.passwordValid = "enter your password";
  } else if (data.password.length < 6) {
    errors.passwordValid = "password is to short";
  }
  if (data.confirmPassword === "") {
    errors.confirmValid = "please confirm your password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmValid = "not match your password";
  }
  if (!data.isAccept) {
    errors.isAcceptValid = "pleas Accept";
  }
  if (type === "login") {
    delete errors.nameValid;
    delete errors.confirmValid;
    delete errors.isAcceptValid;
    return errors;
  } else {
    return errors;
  }
};
