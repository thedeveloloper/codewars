function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(password);
}

validate("testing123#$%");
