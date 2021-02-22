import { state } from './../requests/index';
import { RootState } from "./../../index";
import { CoachState, ICoach } from "./types";
import { GetterTree } from "vuex";

export const getters: GetterTree<CoachState, RootState> = {
  coaches(state) {
    return state.coaches;
  },
  loggedUser(state) {
    return state.loggedIn;
  },
  hasCoaches(state) {
    return state.coaches?.length > 0;
  },
  isLoading(state) {
    return state.loading;
  },
  isCoach(state) {
    return state.loggedIn?.role === "coach";
  },
};
