import { IRequest, RequestState } from "./types";

import { MutationTree } from "vuex";

export const mutations: MutationTree<RequestState> = {
  addRequest(state, payload: IRequest) {
    state.requests.push(payload);
  },
  fetchRequest(state, payload: IRequest[]) {
    state.requests = payload;
  },
};
