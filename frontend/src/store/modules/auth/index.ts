import { RootState } from "./../../index";
import { AuthState } from "./types";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { Module } from "vuex";

export const state: AuthState = {
  token: localStorage.getItem("user-token") || "",
  status: "",
};

export const auth: Module<AuthState, RootState> = {
  state,
  mutations,
  actions,
  getters,
};
