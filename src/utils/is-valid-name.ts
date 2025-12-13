export const isValidNameScheme = (str: string) => {
  if (!str) return false;

  const regex = /^[A-Za-z0-9 _]+$/;
  return regex.test(str);
};
