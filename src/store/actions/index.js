import { getUser } from '../../services/auth';
import router from '../../router';
import { updateSlideshowItem } from '../../services/API'

export const setup = async({ commit }) => {
  try {
    let authUser = await getUser();
    if(authUser)
      authUser = JSON.parse(authUser);

    commit('SET_AUTH_USER', authUser);
    commit('SET_INITIALIZED');
  } catch (error) {
    console.log("Error fetching users:", error);
  }
}

export const setAuthUser = async ({ commit }, authUser) => {
  try {
    commit('SET_AUTH_USER', authUser);
  } catch (error) {
    console.log("Error fetching users:", error);
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
    console.log("Error fetching users:", error);
  }
}
