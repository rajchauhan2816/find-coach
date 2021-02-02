import { RootState } from "./../../index";
import { RequestState } from "./types";
import { ActionTree } from "vuex";

interface IFormData {
  coachId: string;
  email: string;
  message: string;
}

export const actions: ActionTree<RequestState, RootState> = {
  // registerCoach({ commit, rootGetters }, data: IFormData) {
  //   const coachData = {
  //     id: rootGetters.userId,
  //     firstName: data.first,
  //     lastName: data.last,
  //     description: data.desc,
  //     hourlyRate: data.rate,
  //     areas: data.areas,
  //   };
  //   commit("coachLoading");
  //   console.log("Loading...");
  //   return new Promise<boolean>((resolve, _) => {
  //     setTimeout(() => {
  //       commit("coachAdded", coachData);
  //       resolve(true);
  //     }, 2000);
  //   });
  // },
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
