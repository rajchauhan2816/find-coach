import { RootState } from "./../../index";
import { AuthState } from "./types";
import { GetterTree } from "vuex";

export const getters: GetterTree<AuthState, RootState> = {
  isAuthenticated(state) {
    return !!state.token;
  },
  authStatus(state) {
    return state.status;
  },
};
