import { computed } from "vue";
import { useRoute } from "vue-router";
import { defineComponent } from "vue";
import BaseBadge from "@/components/ui/BaseBadge.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
type PropsType = {
  id: string;
  firstName: string;
  lastName: string;
  rate: number;
  areas: string[];
};

export default defineComponent({
  setup(props: PropsType) {
    const { firstName, lastName, areas, rate } = props;
    const route = useRoute();
    const fullName = computed<string>(() => `${firstName} ${lastName}`);
    const coachContactLink = computed<string>(
      () => `${route.path}/${props.id}/contact/`
    );
    const coachDetailLink = computed<string>(() => `${route.path}/${props.id}`);
    return (
      <div>
        <li>
          <h3>{fullName}</h3>
          <h4>{rate}/hour</h4>
          <div>
            {areas.map((area) => (
              <BaseBadge key={area} type={area} title={area} />
            ))}
          </div>
          <div class="actions">
            <BaseButton mode="outline" link to={coachContactLink}>
              Contact
            </BaseButton>
            <BaseButton link to={coachDetailLink}>
              View Details
            </BaseButton>
          </div>
        </li>
      </div>
    );
  },
});
