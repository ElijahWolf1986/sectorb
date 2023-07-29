export const clearUrlPath = (path) => {
  const res = path.pathname.replace(/[^0-9]/g, '');
  return res;
};
