import { RootState } from "./../../index";
import { IRequest, RequestState } from "./types";
import { GetterTree } from "vuex";

export const getters: GetterTree<RequestState, RootState> = {
  requests(state, _, _2, rootGetters): IRequest[] {
    return state.requests;
  },
  hasRequests(_, getters): boolean {
    return getters.requests?.length > 0;
  },
};
