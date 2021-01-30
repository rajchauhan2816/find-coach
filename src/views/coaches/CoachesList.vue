<template>
  <section>
    <CoachFilter @change-filter="setFilters"></CoachFilter>
  </section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline">Refresh</BaseButton>
        <BaseButton link to="/register">Register as Coach</BaseButton>
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
import CoachItem from "@/components/coaches/CoachItem.vue";
import CoachFilter from "@/components/coaches/CoachFilter.vue";
import { computed, reactive } from "vue";
interface filter {
  frontend: true;
  backend: true;
  career: true;
}

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  setup() {
    const store = useStore();

    let activeFilters = reactive({
      frontend: true,
      backend: true,
      career: true,
    });
    const filteredCoaches = computed<ICoach[]>(() => {
      return store.getters["coaches/coaches"].filter((coach: ICoach) => {
        if (activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
        return false;
      });
    });
    const hasCoaches = computed<boolean>(
      () => store.getters["coaches/hasCoaches"]
    );

    function setFilters(updatedFilters: filter) {
      activeFilters.frontend = updatedFilters.frontend;
      activeFilters.backend = updatedFilters.backend;
      activeFilters.career = updatedFilters.career;
    }

    return { filteredCoaches, hasCoaches, setFilters };
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
