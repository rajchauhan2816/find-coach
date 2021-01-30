<template>
  <section>
    <BaseCard>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hour</h3>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <header>
        <h2>Interested? Reach Out Now</h2>
        <BaseButton link :to="contactLink">Contact</BaseButton>
      </header>
    </BaseCard>
  </section>
  <section>
    <BaseCard>
      <BaseBadge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></BaseBadge>
      <p>{{ description }}</p>
    </BaseCard>
  </section>
</template>

<script lang="ts">
import { ICoach } from "@/store/modules/coaches/types";
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: String,
  },
  setup(props) {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let selectedCoach: ICoach;
    onBeforeMount(() => {
      selectedCoach = store.getters["coaches/coaches"].find(
        (coach: ICoach) => coach.id === props.id
      );
    });
    const fullName = computed<string>(
      () => `${selectedCoach.firstName} ${selectedCoach.lastName}`
    );
    const coachContactLink = computed<string>(
      () => `${route.path}/${props.id}/contact/`
    );
    const areas = computed<Array<String>>(() => selectedCoach.areas);
    const rate = computed<Number>(() => selectedCoach.hourlyRate);
    const description = computed<String>(() => selectedCoach.description);
    return { fullName, coachContactLink, areas, rate, description };
  },
});
</script>
