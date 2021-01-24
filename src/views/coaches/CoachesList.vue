<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="coach in filteredCoaches" :key="coach.id">
        {{ coach.firstName }}
      </li>
    </ul>
    <h3 v-else>No Coaches Found</h3>
  </section>
</template>

<script lang="ts">
import { ICoach } from "@/store/modules/coaches/types"
import { useStore } from "vuex"
import { computed } from "vue"
export default {
  setup() {
    const store = useStore()

    const filteredCoaches = computed<ICoach[]>(
      () => store.getters["coaches/coaches"]
    )
    const hasCoaches = computed<boolean>(
      () => store.getters["coaches/hasCoaches"]
    )
    return { filteredCoaches, hasCoaches }
  }
}
</script>
