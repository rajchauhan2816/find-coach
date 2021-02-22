<template>
  <form @submit.prevent="submitForm">
    <BaseCard>
      <div class="form-control">
        <label for="email">E-mail</label>
        <input type="email" id="email" v-model="email" />
      </div>
      <div class="form-control">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <BaseButton>Login</BaseButton>
      <BaseButton type="button" mode="flat">Switch to Signup</BaseButton>
    </BaseCard>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    let email = ref("");
    let password = ref("");
    function submitForm() {
      store.dispatch("AUTH_REQUEST", {
        username: email.value,
        password: password.value,
      });
      router.push("/");
    }
    return { email, password, submitForm };
  },
});
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}
</style>
