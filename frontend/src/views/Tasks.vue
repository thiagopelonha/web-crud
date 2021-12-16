<template>
  <v-col cols="12">
    <v-row>
      <h2>All your tasks</h2>
      <v-spacer></v-spacer>
      <v-btn color="success" href="/tasks/new">
        <v-icon class="mr-2">mdi-clipboard-plus-outline</v-icon>
        New task
      </v-btn>
    </v-row>
    <v-row>
      <v-list
        class="overflow-auto"
        v-for="(task, i) in tasks"
        cols="auto"
        :key="i"
      >
        <task-card @onDestroy="onDestroy" :task="task" :editing="false" />
      </v-list>
    </v-row>
  </v-col>
</template>

<script>
import { api } from "../helpers/helpers";
import TaskCard from "../components/Tasks/Card.vue";

export default {
  name: "tasks",
  components: {
    "task-card": TaskCard,
  },
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    onDestroy: async function (id) {
      const sure = window.confirm("Are you sure?");
      if (!sure) return;
      await api.deletetask(id);
      const newtasks = this.tasks.filter((task) => task._id !== id);
      this.tasks = newtasks;
    },
  },
  async mounted() {
    this.tasks = await api.gettasks();
  },
};
</script>
