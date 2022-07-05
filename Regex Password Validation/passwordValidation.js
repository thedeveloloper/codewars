function validate(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[0-9a-zA-Z]{6,}$/.test(password);
}
