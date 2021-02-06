import { RootState } from "./../../index";
import { RequestState } from "./types";
import { ActionTree } from "vuex";

interface IFormData {
  coachId: string;
  email: string;
  message: string;
}

export const actions: ActionTree<RequestState, RootState> = {
  contactCoach({ commit }, payload: IFormData) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    commit("addRequest", newRequest);
  },
};
