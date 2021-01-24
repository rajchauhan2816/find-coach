import { ICoach } from "./types"

export default {
  coaches(state: { coaches: ICoach[] }) {
    return state.coaches
  },
  hasCoaches(state: { coaches: ICoach[] }) {
    return state.coaches?.length > 0
  }
}
