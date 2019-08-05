import { mock, post, get } from "./setup";
import { getToken } from "../auth";
import sampleProjects from "./sampleProjects";

export const login = async (data) => {
  // return await post('/users/login', data);
  return {"_id":"5ccafa30fd5d3b7d9d5c3480","firstName":"Gabby","lastName":"Mushi","displayName":"Gabby Mushi","role":"5d30339cd19cad4b4d326089","email":"gabrielpatrickmushi@gmail.com","phoneNumber":"713122995","idType":"nationalId","idNumber":"123456","userType":"user","verifiedAt":"2019-05-02T14:09:52.537Z","token":"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2NhZmEzMGZkNWQzYjdkOWQ1YzM0ODAiLCJpYXQiOjE1NjQwNTA0Mzd9.bS_S0JWeCfGaxm9fMDSNIUxCFpML8XmXhHp5a8oaUMY"};
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

export const fetchProjects = async () => {
  // const token = await getToken();
  // return get('/projects', token);
  await mock();
  return sampleProjects;
};

export const fetchPartners = async () => {
  // const token = await getToken();
  // return get('/partners', token);
  await mock();
  return [
    { id: 1, name: "CRDB", logo: "https://jestrux.github.io/global-compact-tz/assets/img/partners/strategic/crdb.png" },
    { id: 2, name: "Vodacom Tanzania" , logo: "https://jestrux.github.io/global-compact-tz/assets/img/partners/strategic/vodacom.jpg" }
  ]
};

export const insertPartner = async (data) => {
  // const token = await getToken();
  // return patch('/slideshows', token);
  await mock();
  return {...data, id: Math.floor(Math.random() * (74 - 27) + 27)};
};

export const updatePartner = async (data) => {
  // const token = await getToken();
  // return patch('/slideshows', token);
  await mock();
  return data;
};

export const fetchEvents = async () => {
  // const token = await getToken();
  // return get('/events', token);
  await mock();
  return [
    {
      id: 1,
      date: new Date("Aug 21, 2019"),
      title: "Tanzania Annual SDGs Summit",
      location: "Diamond Jubilee, Dar es Salaam",
      description: "2019 installation of the event with attendees from within and outside the country.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSePjEgJ5LpF5vPmOhSewFKFKoJff9KIKUSkNHvFY4fNzBU0Bw/viewform",
    },
    {
      id: 2,
      date: new Date("Sep 5, 2019"),
      title: "Anti Poaching Seminar",
      location: "AICC, Arusha",
      description: "TANAPA hosts three weeks of training to park maintainers on how to deal with poachers.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSePjEgJ5LpF5vPmOhSewFKFKoJff9KIKUSkNHvFY4fNzBU0Bw/viewform",
    },
    {
      id: 3,
      date: new Date("Nov 7, 2019"),
      title: "Affordable Renewable Energy Training",
      location: "Bikwi Hall, Singida",
      description: "TAREA experts will teach Singida citizens that renewable energy need not be cutting edge and expensive.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSePjEgJ5LpF5vPmOhSewFKFKoJff9KIKUSkNHvFY4fNzBU0Bw/viewform",
    }
  ]
};

export const insertEvent = async (data) => {
  // const token = await getToken();
  // return post('/events', token);
  await mock();
  return {...data, id: Math.floor(Math.random() * (74 - 27) + 27)};
};

export const updateEvent = async (data) => {
  // const token = await getToken();
  // return patch(`/events/${data.id}`, token, data);
  await mock();
  return data;
};
