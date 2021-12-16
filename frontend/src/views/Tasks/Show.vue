<template>
  <v-col>
    <v-row>
      <v-btn icon href="/tasks">
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
      <h2>Your task</h2>
    </v-row>
    <v-row>
      <v-col>
        <task-card
          @onDestroy="onDestroy"
          :task="task"
          :editing="false"
          :show="true"
        />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import { api } from "../../helpers/helpers";
import TaskCard from "../../components/Tasks/Card.vue";

export default {
  name: "show",
  components: {
    "task-card": TaskCard,
  },
  data() {
    return {
      task: "",
    };
  },
  methods: {
    onDestroy: async function (id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deletetask(id);
      this.$router.push("/tasks");
    },
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  },
};
</script>
