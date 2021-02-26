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
        <BaseButton link :to="coachContactLink" v-if="iscontact"
          >Contact</BaseButton
        >
        <div>
          <router-view></router-view>
        </div>
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
import { computed, onBeforeMount, onMounted, reactive, ref } from "vue";
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

    let selectedCoach = reactive<any>({
      _id: "",
      areas: [],
      description: "",
      hourlyRate: 0,
      user: {
        _id: "",
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        role: "",
      },
    });
    onMounted(async () => {
      const res = await store.dispatch("coaches/FETCH_COACH", props.id);
      Object.keys(res).forEach((val) => {
        selectedCoach[val] = res[val];
      });
    });
    const fullName = computed<string>(
      () => `${selectedCoach.user.firstName} ${selectedCoach.user.lastName}`
    );
    const coachContactLink = computed<string>(() => `${route.path}/contact/`);
    const areas = computed<Array<String>>(() => selectedCoach.areas);
    const rate = computed<Number>(() => selectedCoach.hourlyRate);
    const description = computed<String>(() => selectedCoach.description);
    let iscontact = computed<Boolean>(() => {
      if (route.path.includes("contact")) {
        return false;
      }
      return true;
    });
    return {
      fullName,
      coachContactLink,
      areas,
      rate,
      description,
      iscontact,
      route,
    };
  },
});
</script>
