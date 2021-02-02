<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Your Email</label>
      <input type="email" id="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model.trim="message"></textarea>
    </div>
    <p class="erros" v-if="!formIsValid.value">
      Please Enter a Valid Email and Non Empty Message
    </p>
    <div class="actions">
      <BaseButton>Send Message</BaseButton>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    let email = ref("");
    let message = ref("");
    let formIsValid = ref(true);

    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    function submitForm() {
      formIsValid.value = true;
      if (
        email.value === "" ||
        !email.value.includes("@") ||
        message.value === ""
      ) {
        formIsValid.value = false;
        return;
      }
      // Add requests
      store.dispatch("requests/contactCoach", {
        email: email.value,
        message: message.value,
        coachId: route.params.id,
      });
      // console.log(store.getters["requests/requests"]);
      router.replace("/coaches");
    }
    return { email, message, submitForm, formIsValid };
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

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
