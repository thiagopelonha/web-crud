<template>
  <v-card elevation="2" outlined shaped>
    <v-card-title v-text="task.name"> </v-card-title>
    <v-card-text>
      {{ task.description }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :href="`/tasks/${task._id}`" :disabled="show || editing" icon>
        <v-icon color="blue">mdi-eye</v-icon>
      </v-btn>
      <v-btn :href="`/tasks/${task._id}/edit`" :disabled="editing" icon>
        <v-icon color="blue darken-4">mdi-application-edit</v-icon>
      </v-btn>
      <v-btn @click.prevent="destroy(task._id)" :disabled="editing" icon>
        <v-icon color="red">mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "task-card",
  // Props to receive task and mount component
  props: {
    // Props to pass by view to component, enabling to use into our views
    task: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: "",
          description: "",
        };
      },
    },
    editing: {
      type: Boolean,
      required: true,
    },
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    // Method to emit our received event from view
    destroy: function (id) {
      if (!this.editing) {
        this.$emit("onDestroy", id);
      }
    },
  },
};
</script>
