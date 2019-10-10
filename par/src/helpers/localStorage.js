export const setJson = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getJson = key => {
  return JSON.parse(localStorage.getItem(key));
};
