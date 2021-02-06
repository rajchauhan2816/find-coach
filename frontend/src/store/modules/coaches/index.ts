import { RootState } from "./../../index";
import { CoachState } from "./types";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { Module } from "vuex";

export const state: CoachState = {
  coaches: [
    {
      id: "c1",
      firstName: "Maximilian",
      lastName: "Schwarzmüller",
      areas: ["frontend", "backend", "career"],
      description:
        "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
      hourlyRate: 30,
    },
    {
      id: "c2",
      firstName: "Julie",
      lastName: "Jones",
      areas: ["frontend", "career"],
      description:
        "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
      hourlyRate: 30,
    },
  ],
  loading: false,
  error: undefined,
};

const namespaced: boolean = true;

export const coaches: Module<CoachState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};
