import { RootState } from "./../../index";
import { CoachState } from "./types";
import { ActionTree } from "vuex";

interface IFormData {
  first: string;
  last: string;
  desc: string;
  rate: number;
  areas: string[];
}

export const actions: ActionTree<CoachState, RootState> = {
  registerCoach({ commit }, data: IFormData) {
    const coachData = {
      id: "c3",
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };
    commit("coachLoading");
    console.log("Loading...");
    return new Promise<boolean>((resolve, _) => {
      setTimeout(() => {
        commit("coachAdded", coachData);
        resolve(true);
      }, 2000);
    });
  },
};
