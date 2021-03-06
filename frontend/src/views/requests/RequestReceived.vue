<template>
  <section>
    <BaseCard>
      <header>
        <h2>Request Received</h2>
      </header>
      <ul v-if="hasRequests">
        <RequestItem
          v-for="req in receivedRequests"
          :key="req._id"
          :email="isCoach ? req.from.email : req.to.user.email"
          :message="req.message"
        ></RequestItem>
      </ul>
      <h3 v-else>You Haven't Received Any Request Yet!</h3>
    </BaseCard>
  </section>
</template>

<script lang="ts">
import { useStore } from "vuex";
import store from "@/store/index";
import { IRequest } from "@/store/modules/requests/types";
import { computed, defineComponent, ref } from "vue";
import RequestItem from "@/components/requests/RequestItem.vue";

export default defineComponent({
  components: {
    RequestItem,
  },
  setup() {
    let email = ref();
    const store = useStore();
    const isCoach = computed<Boolean>(() => {
      return store.getters["coaches/isCoach"];
    });
    const receivedRequests = computed<IRequest[]>(() => {
      return store.getters["requests/requests"];
    });
    const hasRequests = computed<boolean>(() => {
      return store.getters["requests/hasRequests"];
    });
    return { receivedRequests, hasRequests, isCoach };
  },
  beforeRouteEnter() {
    console.log("object");
    store.dispatch("requests/fetchRequest");
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
