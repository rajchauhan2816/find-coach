<template>
  <span class="badge" :class="type">{{ text }}</span>
</template>

<script lang="ts">
import { computed } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  props: { title: { type: String, required: true }, type: String },
  setup(props) {
    const text = computed<string>(() => `${props.title.toUpperCase()}`);
    // const text2 = computed<string>(() => props.title?.toUpperCase() ?? "");
    return { text };
  },
});
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
