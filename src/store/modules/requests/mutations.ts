import { RequestState, IRequest } from "./types";

import { MutationTree } from "vuex";

export const mutations: MutationTree<RequestState> = {
  //  coachAdded(state, payload: ICoach) {
  //    state.error = undefined;
  //    state.loading = false;
  //    state.coaches.push(payload);
  //  },
  //  coachLoading(state) {
  //    state.loading = true;
  //  },
  //  coachError(state, message: string) {
  //    state.error = message;
  //    state.loading = false;
  //  },
  addRequest(state, payload: IRequest) {
    state.requests.push(payload);
  },
};
