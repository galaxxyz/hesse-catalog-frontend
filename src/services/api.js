const baseURL = 'http://localhost:1337/api';

const getProducts = async () => {
  const response = await fetch(`${baseURL}/products?populate=*`);
  const data = await response.json();
  return data;
};

const getSubscriptions = async () => {
  const response = await fetch(`${baseURL}/subscription-types?populate=*`);
  const data = await response.json();
  return data;
};

const getProductTypes = async () => {
  const response = await fetch(`${baseURL}/product-types?populate=*`);
  const data = await response.json();
  return data;
};

const api = { getProducts, getSubscriptions, getProductTypes };

export default api;
