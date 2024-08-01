export function validateUrl(url) {
  const urlRegex =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return urlRegex.test(url);
}

export function validateKey(key) {
  const keyRegex = /^[a-f0-9]{6}$/i;
  return keyRegex.test(key);
}
