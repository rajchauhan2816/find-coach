import { CoachState, ICoach } from "./types";

import { MutationTree } from "vuex";

export const mutations: MutationTree<CoachState> = {
  coachAdded(state, payload: ICoach) {
    state.error = undefined;
    state.loading = false;
    state.coaches.push(payload);
  },
  coachLoading(state) {
    state.loading = true;
  },
  coachError(state, message: string) {
    state.error = message;
    state.loading = false;
  },
};
