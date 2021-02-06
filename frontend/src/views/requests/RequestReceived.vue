<template>
  <section>
    <BaseCard>
      <header>
        <h2>Request Received</h2>
      </header>
      <ul v-if="hasRequests">
        <RequestItem
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></RequestItem>
      </ul>
      <h3 v-else>You Haven't Received Any Request Yet!</h3>
    </BaseCard>
  </section>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { IRequest } from "@/store/modules/requests/types";
import { computed, defineComponent } from "vue";
import RequestItem from "@/components/requests/RequestItem.vue";

export default defineComponent({
  components: {
    RequestItem,
  },
  setup() {
    const store = useStore();
    const receivedRequests = computed<IRequest[]>(() => {
      return store.getters["requests/requests"];
    });
    const hasRequests = computed<boolean>(() => {
      return store.getters["requests/hasRequests"];
    });
    return { receivedRequests, hasRequests };
  },
});
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
