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
  }
}
