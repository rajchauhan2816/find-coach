import { createStore } from "vuex";
import { coaches } from "./modules/coaches/index";

export interface RootState {}

export default createStore<RootState>({
  modules: { coaches },
  state: {},
  mutations: {},
  actions: {},
});
