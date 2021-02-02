import { RootState } from "./../../index";
import { RequestState, IRequest } from "./types";
import { GetterTree } from "vuex";

export const getters: GetterTree<RequestState, RootState> = {
  //  coaches(state) {
  //    return state.coaches;
  //  },
  //  hasCoaches(state) {
  //    return state.coaches?.length > 0;
  //  },
  //  isLoading(state) {
  //    return state.loading;
  //  },
  requests(state): IRequest[] {
    return state.requests;
  },
  hasRequests(state): boolean {
    return state.requests.length > 0;
  },
};
