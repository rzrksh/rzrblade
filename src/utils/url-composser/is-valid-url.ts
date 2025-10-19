export const isValidURL = (urlString: string) => {
    try {
    new URL(urlString);
    return true;
  } catch (error) {
    return false;
  }
}