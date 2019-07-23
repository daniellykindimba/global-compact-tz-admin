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
    slideshowItems: [
      { id: 1, image: null, text: "" },
      { id: 2, image: "https://images.unsplash.com/photo-1563778084459-859099e48677?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80", text: "" },
      { id: 3, image: null, text: "Why you went away now" }
    ]
  },
  actions,
  mutations
});
