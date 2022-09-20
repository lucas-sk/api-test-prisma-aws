export function checkNamePass(name: string, password: string): boolean {
  let isValid = false;

  if (!name) {
    isValid = true;
  }

  if (!password) {
    isValid = true;
  }

  return isValid
}