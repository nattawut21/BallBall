interface item {
  name: string;
  content: string;
}

// manage local storage
export const setItem = ({ name, content }: item) =>
  localStorage.setItem(name, content);
export const getItem = (name: string) => localStorage.getItem(name);
export const removeItem = (name: string) => localStorage.removeItem(name);
