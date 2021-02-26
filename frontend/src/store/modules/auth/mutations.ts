import { AuthState } from "./types";

import { MutationTree } from "vuex";
export const mutations: MutationTree<AuthState> = {
  AUTH_REQUEST(state) {
    state.status = "loading";
  },
  AUTH_SUCCESS(state, token) {
    state.status = "success";
    state.token = token;
  },
  AUTH_ERROR(state) {
    state.status = "error";
  },
  AUTH_LOGOUT(state) {
    state.token = "";
  },
};
