import { mock, post, get } from "./setup";
import { getToken } from "../auth";

export const login = async (data) => {
  return await post('/users/login', data);
};

export const fetchSlideshowItems = async () => {
  const token = await getToken();
  return get('/users', token);
};

export const updateSlideshowItem = async (data) => {
  // const token = await getToken();
  // return patch('/slideshows', token);
  await mock();
  return data;
};
