import { axios } from "@/utils/axios";
import { RootState } from "./../../index";
import { CoachState } from "./types";
import { ActionTree } from "vuex";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  country: string;
  email: string;
  role: string;
}

interface Coach {
  areas: string[];
  description: string;
  hourlyRate: number;
  user: User;
}

export const actions: ActionTree<CoachState, RootState> = {
  FETCH_COACHES({ commit }) {
    axios.get("http://localhost:3000/coaches/").then((response) => {
      commit("FETCH_COACHES", response.data);
    });
  },
  registerCoach({ commit, rootGetters }, data: any) {
    const coachData = {
      id: rootGetters.userId,
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
  FETCH_ME({ commit }) {
    axios.get("http://localhost:3000/users/me").then((response) => {
      console.log(response.data);
      commit("FETCH_ME", response.data);
    });
  },
};
