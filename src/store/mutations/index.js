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

  FETCHING_PARTNERS(state, fetchingPartners){
    state.fetchingPartners = fetchingPartners;
  },

  UPDATING_PARTNER(state, updatingPartner){
    state.updatingPartner = updatingPartner;
  },

  SET_PARTNERS(state, partners){
    state.partners = partners;
  }
}
