import { RootState } from "./../../index";
import { RequestState } from "./types";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { Module } from "vuex";

export const state: RequestState = {
  requests: [],
};

const namespaced: boolean = true;

export const requests: Module<RequestState, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters,
};
