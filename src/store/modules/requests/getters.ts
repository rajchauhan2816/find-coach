import { RootState } from "./../../index";
import { RequestState, IRequest } from "./types";
import { GetterTree } from "vuex";

export const getters: GetterTree<RequestState, RootState> = {
  requests(state): IRequest[] {
    return state.requests;
  },
  hasRequests(state): boolean {
    return state.requests.length > 0;
  },
};
