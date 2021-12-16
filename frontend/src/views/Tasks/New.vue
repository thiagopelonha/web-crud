<template>
  <v-col cols="12">
    <v-row>
      <v-btn icon href="/tasks">
        <v-icon> mdi-chevron-left </v-icon>
      </v-btn>
      <h2>New task</h2>
    </v-row>
    <v-row>
      <v-col cols="12">
        <task-form @createOrUpdate="createOrUpdate" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import taskForm from "../../components/Tasks/Form.vue";
import { api } from "../../helpers/helpers";
export default {
  name: "new-task",
  components: {
    "task-form": taskForm,
  },
  methods: {
    createOrUpdate: async function (task) {
      const res = await api.createtask(task);
      this.$router.push(`/tasks/${res._id}`);
    },
  },
};
</script>
