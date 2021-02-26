import { RootState } from "./../../index";
import { RequestState } from "./types";
import { ActionTree } from "vuex";
import { axios } from "@/utils/axios";
import { SERVER } from "@/utils/url";


interface IFormData {
  coachId: string;
  message: string;
}

export const actions: ActionTree<RequestState, RootState> = {
  contactCoach({ commit }, payload: IFormData) {
    const newRequest = {
      text: payload.message,
      coachId: payload.coachId,
    };
    axios({
      url: SERVER.url + "/requests",
      data: newRequest,
      method: "POST",
    })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //commit("addRequest", newRequest);
  },
};
