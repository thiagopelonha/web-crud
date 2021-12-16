<template>
  <v-col cols="12">
    <v-row>
      <v-btn icon href="/tasks">
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
      <h2>Edit task</h2>
    </v-row>
    <v-row>
      <v-col cols="12">
        <task-form @createOrUpdate="createOrUpdate" :task="this.task" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import taskForm from "../../components/Tasks/Form.vue";
import { api } from "../../helpers/helpers";

export default {
  name: "edit",
  components: {
    "task-form": taskForm,
  },
  data: function () {
    return {
      task: {},
    };
  },
  methods: {
    // Methods to emit event from component
    createOrUpdate: async function (task) {
      await api.updatetask(task);
      this.$router.push(`/tasks/${task._id}`);
    },
  },
  async mounted() {
    this.task = await api.gettask(this.$route.params.id);
  },
};
</script>
