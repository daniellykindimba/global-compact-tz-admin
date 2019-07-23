import { mock, post, get } from "./setup";
import { getToken } from "../auth";

export const login = async (data) => {
  return await post('/users/login', data);
};

export const fetchSlideshowItems = async () => {
  // const token = await getToken();
  // return get('/users', token);
  await mock();
  return [
    { id: 1, image: null, text: "" },
    { id: 2, image: "https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", text: "" },
    { id: 3, image: null, text: "Why you went away now" }
  ]
};

export const updateSlideshowItem = async (data) => {
  // const token = await getToken();
  // return patch('/slideshowItems', token);
  await mock();
  return data;
};

export const fetchPartners = async () => {
  // const token = await getToken();
  // return get('/partners', token);
  await mock();
  return [
    { id: 1, name: "CRDB", image: "https://jestrux.github.io/global-compact-tz/assets/img/partners/strategic/crdb.png" },
    { id: 2, name: "Vodacom Tanzania" , image: "https://jestrux.github.io/global-compact-tz/assets/img/partners/strategic/vodacom.jpg" }
  ]
};

export const updatePartner = async (data) => {
  // const token = await getToken();
  // return patch('/slideshows', token);
  await mock();
  return data;
};
