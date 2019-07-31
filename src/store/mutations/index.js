export default {
  SET_INITIALIZED(state){
    state.initialized = true;
  },

  SET_AUTH_USER(state, user){
    state.authUser = user
  },

  FETCHING_SLIDESHOW_ITEMS(state, fetchingSlideshowItems){
    state.fetchingSlideshowItems = fetchingSlideshowItems;
  },

  UPDATING_SLIDESHOW_ITEM(state, updatingSlideshowItem){
    state.updatingSlideshowItem = updatingSlideshowItem;
  },

  SET_SLIDESHOW_ITEMS(state, items){
    state.slideshowItems = items;
  },

  FETCHING_PROJECTS(state, status){
    state.fetchingProjects = status;
  },

  SET_PROJECTS(state, projects){
    state.projects = projects;
  },

  FETCHING_PARTNERS(state, status){
    state.fetchingPartners = status;
  },

  UPDATING_PARTNER(state, status){
    state.updatingPartner = status;
  },

  CREATING_PARTNER(state, status){
    state.creatingPartner = status;
  },

  SET_PARTNERS(state, partners){
    state.partners = partners;
  },

  FETCHING_EVENTS(state, status){
    state.fetchingEvents = status;
  },

  CREATING_EVENT(state, status){
    state.creatingEvent = status;
  },

  UPDATING_EVENT(state, status){
    state.updatingEvent = status;
  },

  SET_EVENTS(state, events){
    state.events = events;
  }
}
