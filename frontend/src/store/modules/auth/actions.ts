import { RootState } from "./../../index";
import { AuthState } from "./types";
import { ActionTree } from "vuex";
import { axios, set_acess_token } from "@/utils/axios";

interface IFormData {
  username: string;
  password: string;
}

export const actions: ActionTree<AuthState, RootState> = {
  AUTH_REQUEST({ commit, dispatch }, user: IFormData) {
    console.log(user);
    commit("AUTH_REQUEST");
    axios({
      url: "http://localhost:3000/auth/login",
      data: user,
      method: "POST",
    })
      .then((resp) => {
        // console.log(resp);
        const token = resp.data.access_token;
        localStorage.setItem("user-token", token); // store the token in localstorage
        commit("AUTH_SUCCESS", token);
        set_acess_token(token);
        //axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // you have your token, now log in your user :)
        // dispatch("USER_REQUEST");
        // resolve(resp);
      })
      .catch((err) => {
        commit("AUTH_ERROR", err);
        localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
        // reject(err);
      });
  },
  AUTH_LOGOUT({ commit }) {
    commit("AUTH_LOGOUT");
    localStorage.removeItem("user-token");
  },
};
