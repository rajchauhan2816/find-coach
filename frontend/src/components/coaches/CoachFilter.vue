<template>
  <BaseCard>
    <h2>Find Your Coach</h2>
    <span class="filter-options">
      <input type="checkbox" id="frontend" checked @change="setFilter" />
      <label for="frontend">Frontend</label>
      <input type="checkbox" id="backend" checked @change="setFilter" />
      <label for="backend">Backend</label>
      <input type="checkbox" id="career" checked @change="setFilter" />
      <label for="career">Career</label>
    </span>
  </BaseCard>
</template>

<script lang="ts">
import { reactive } from "vue";
import { defineComponent } from "vue";

// export interface Events {
//   id: string;
//   checked: boolean;
// }

export default defineComponent({
  emits: ["change-filter"],
  setup(_, { emit }) {
    let filters = reactive({ frontend: true, backend: true, career: true });
    function setFilter({ target }: { target: HTMLInputElement }) {
      const inputId = target.id;
      const isActive = target.checked;
      const updatedFilter = { ...filters, [inputId]: isActive };
      filters = updatedFilter;
      emit("change-filter", updatedFilter);
    }
    return { setFilter };
  },
});
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
