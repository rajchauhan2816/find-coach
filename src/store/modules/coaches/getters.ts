import { RootState } from "./../../index";
import { CoachState } from "./types";
import { GetterTree } from "vuex";

export const getters: GetterTree<CoachState, RootState> = {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches?.length > 0;
  },
  isLoading(state) {
    return state.loading;
  },
};
