import { RootState } from "./../../index";
import { CoachState, ICoach } from "./types";
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
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach: ICoach) => coach.id === userId);
  },
};
