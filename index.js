export function checkPassword(password) {
  for (i = 0; i < password.length; i++) {
    if (password[i] === "@") return true;
    else return false;
  }
}
