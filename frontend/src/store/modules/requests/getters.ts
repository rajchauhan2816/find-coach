import { RootState } from "./../../index";
import { RequestState, IRequest } from "./types";
import { GetterTree } from "vuex";

export const getters: GetterTree<RequestState, RootState> = {
  requests(state, _, _2, rootGetters): IRequest[] {
    const coachId = rootGetters.userId;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(_, getters): boolean {
    return getters.requests?.length > 0;
  },
};
