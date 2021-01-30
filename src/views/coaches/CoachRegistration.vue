<template>
  <section>
    <BaseCard>
      <h2>Register As A Coach</h2>
      <div v-if="isLoading">Loading....</div>
      <CoachForm v-else @save-data="saveData"></CoachForm>
    </BaseCard>
  </section>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import CoachForm from "../../components/coaches/CoachForm.vue";
import { computed } from "vue";
interface IData {
  firstName: string;
  lastName: string;
  description: string;
  rate: number;
  areas: string[];
}
export default {
  components: {
    CoachForm,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const isLoading = computed<boolean>(
      () => store.getters["coaches/isLoading"]
    );

    async function saveData(data: IData) {
      const result: boolean = await store.dispatch(
        "coaches/registerCoach",
        data
      );
      if (result) router.replace("/coaches");
    }
    return { saveData, isLoading };
  },
};
</script>
