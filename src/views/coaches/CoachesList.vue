<template>
  <section>Filter</section>
  <section>
    <BaseCard>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-Name="coach.firstName"
          :last-Name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        />
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </BaseCard>
  </section>
</template>

<script lang="ts">
import { ICoach } from "@/store/modules/coaches/types";
import { useStore } from "vuex";
import { computed } from "vue";
import CoachItem from "../../components/coaches/CoachItem.vue";
export default {
  components: {
    CoachItem,
  },
  setup() {
    const store = useStore();

    const filteredCoaches = computed<ICoach[]>(
      () => store.getters["coaches/coaches"]
    );
    const hasCoaches = computed<boolean>(
      () => store.getters["coaches/hasCoaches"]
    );
    return { filteredCoaches, hasCoaches };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
