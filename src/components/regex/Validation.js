export const isValidEmail = (email) => {
  let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  let regex = RegExp(pattern);
  if (regex.test(email)) return true;
  return false;
};

export const isValidPassword = (password) => {
  let pattern = "[a-zA-Z0-9].{8,15}";
  let regex = RegExp(pattern);
  if (regex.test(password)) return true;
  return false;
};
