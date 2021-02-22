<template>
  <section>
    <CoachFilter @change-filter="setFilters"></CoachFilter>
  </section>
  <section>
    <BaseCard>
      <div class="controls">
        <BaseButton mode="outline" @click="fetchCoaches">Refresh</BaseButton>
        <BaseButton v-if="!isCoach" link to="/register"
          >Register as Coach</BaseButton
        >
      </div>
      <ul v-if="hasCoaches">
        <CoachItem
          v-for="coach in filteredCoaches"
          :key="coach._id"
          :id="coach._id"
          :first-Name="coach.user.firstName"
          :last-Name="coach.user.lastName"
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
import { computed, defineComponent, reactive } from "vue";
interface filter {
  frontend: true;
  backend: true;
  career: true;
}

export default defineComponent({
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

    const isCoach = computed<boolean>(() => store.getters["coaches/isCoach"]);

    function fetchCoaches() {
      store.dispatch("coaches/FETCH_COACHES");
      store.dispatch("coaches/FETCH_ME");
    }

    return { filteredCoaches, hasCoaches, setFilters, isCoach, fetchCoaches };
  },
  beforeMount() {
    const store = useStore();
    store.dispatch("coaches/FETCH_COACHES");
  },
});
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
