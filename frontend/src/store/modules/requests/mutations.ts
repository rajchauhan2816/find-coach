import { RequestState, IRequest } from "./types";

import { MutationTree } from "vuex";

export const mutations: MutationTree<RequestState> = {
  addRequest(state, payload: IRequest) {
    state.requests.push(payload);
  },
};
