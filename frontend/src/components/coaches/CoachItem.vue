<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <BaseBadge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></BaseBadge>
    </div>
    <div class="actions">
      <BaseButton mode="outline" link :to="coachContactLink"
        >Contact</BaseButton
      >
      <BaseButton link :to="coachDetailLink">View Details</BaseButton>
    </div>
  </li>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    id: String,
    firstName: String,
    lastName: String,
    rate: Number,
    areas: Array,
  },
  // computed: {
  //   fullName() {
  //     return this.firstName + this.lastName
  //   }
  // },
  setup(props) {
    const route = useRoute();
    const fullName = computed<string>(
      () => `${props.firstName} ${props.lastName}`
    );
    const coachContactLink = computed<string>(
      () => `${route.path}/${props.id}/contact/`
    );
    const coachDetailLink = computed<string>(() => `${route.path}/${props.id}`);
    return { fullName, coachContactLink, coachDetailLink };
  },
});
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
