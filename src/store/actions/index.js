import { getUser } from '../../services/auth';
import router from '../../router';
import { updateSlideshowItem, fetchSlideshowItems, fetchPartners, updatePartner, insertPartner, fetchProjects } from '../../services/API'

export const setup = async({ commit }) => {
  try {
    let authUser = await getUser();
    if(authUser)
      authUser = JSON.parse(authUser);

    commit('SET_AUTH_USER', authUser);
    commit('SET_INITIALIZED');
  } catch (error) {
    console.log("Error initing app:", error);
  }
}

export const setAuthUser = async ({ commit }, authUser) => {
  try {
    commit('SET_AUTH_USER', authUser);
  } catch (error) {
    console.log("Error setting auth users:", error);
  }
}

export const getSlideshowItems = async ({ commit }) => {
  try {
    commit('FETCHING_SLIDESHOW_ITEMS', true);
    const slideshowItems = await fetchSlideshowItems();
    commit('FETCHING_SLIDESHOW_ITEMS', false);
    commit('SET_SLIDESHOW_ITEMS', slideshowItems);
  } catch (error) {
    commit('FETCHING_SLIDESHOW_ITEMS', false);
    commit('SET_SLIDESHOW_ITEMS', null);
    console.log("Error fetching slideshow items:", error);
  }
}

export const editSlideshowItem = async ({ state, commit }, data) => {
  try {
    commit('UPDATING_SLIDESHOW_ITEM', true);
    const changedItem = await updateSlideshowItem(data);

    let slideshowItems = state.slideshowItems.map(item => {
      if(item.id === changedItem.id)
        return changedItem;

      return item;
    });
    commit('UPDATING_SLIDESHOW_ITEM', false);
    commit('SET_SLIDESHOW_ITEMS', slideshowItems);
    router.replace('/home');
  } catch (error) {
    commit('UPDATING_SLIDESHOW_ITEM', false);
    console.log("Error updating slideshow item:", error);
  }
}

export const getProjects = async ({ commit }) => {
  try {
    commit('FETCHING_PROJECTS', true);
    const projects = await fetchProjects();
    commit('FETCHING_PROJECTS', false);
    commit('SET_PROJECTS', projects);
  } catch (error) {
    commit('FETCHING_PROJECTS', false);
    commit('SET_PROJECTS', null);
    console.log("Error fetching projects:", error);
  }
}

export const getPartners = async ({ commit }) => {
  try {
    commit('FETCHING_PARTNERS', true);
    const partners = await fetchPartners();
    commit('FETCHING_PARTNERS', false);
    commit('SET_PARTNERS', partners);
  } catch (error) {
    commit('FETCHING_PARTNERS', false);
    commit('SET_PARTNERS', null);
    console.log("Error fetching partners:", error);
  }
}

export const editPartner = async ({ state, commit }, data) => {
  try {
    commit('UPDATING_PARTNER', true);
    const changedPartner = await updatePartner(data);

    let partners = state.partners.map(partner => {
      if(partner.id === changedPartner.id)
        return changedPartner;

      return partner;
    });
    commit('UPDATING_PARTNER', false);
    commit('SET_PARTNERS', partners);
    router.replace('/partners');
  } catch (error) {
    commit('UPDATING_PARTNER', false);
    console.log("Error updating partner:", error);
  }
}

export const createPartner = async ({ state, commit }, data) => {
  try {
    commit('CREATING_PARTNER', true);
    const newPartner = await insertPartner(data);
    let partners = state.partners;
    if(!partners)
      partners = [];

    partners.push(newPartner);
    commit('CREATING_PARTNER', false);
    commit('SET_PARTNERS', partners);
    router.replace('/partners');
  } catch (error) {
    commit('CREATING_PARTNER', false);
    console.log("Error creating partner:", error);
  }
}
