import { auth } from "./modules/auth/index";
import { createStore } from "vuex";
import { coaches } from "./modules/coaches/index";
import { requests } from "./modules/requests/index";

export interface RootState {
  userId: string;
}

export default createStore<RootState>({
  modules: { coaches, requests, auth },
  state() {
    return {
      userId: "c3",
    };
  },
  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});
