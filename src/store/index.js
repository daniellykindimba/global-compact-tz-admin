import Vue from 'vue';
import vuex from 'vuex';

import * as actions from './actions';
import mutations from './mutations';

Vue.use(vuex);

export default new vuex.Store({
  state: {
    initialized: false,
    authUser: null,
    fetchingSlideshowItems: false,
    updatingSlideshowItem: false,
    slideshowItems: null,
    fetchingPartners: false,
    updatingPartner: false,
    creatingPartner: false,
    partners: null,
    fetchingProjects: false,
    projects: null,
    fetchingEvents: false,
    creatingEvent: false,
    updatingEvent: false,
    events: null,
  },
  actions,
  mutations
});
