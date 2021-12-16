<template>
  <v-form @submit.prevent="sendForm" v-model="valid">
    <v-row>
      <v-col>
        <v-col>
          <v-text-field
            v-model="task.name"
            required
            :counter="25"
            maxlength="25"
            :rules="nameRules"
            prepend-inner-icon="mdi-clipboard-outline"
            label="Task name"
          >
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="task.description"
            required
            :rules="descriptionRules"
            prepend-inner-icon="mdi-clipboard-alert-outline"
            label="Taks description"
          >
          </v-text-field>
        </v-col>
      </v-col>
      <v-col>
        <task-card :task="task" :editing="true" />
      </v-col>
    </v-row>
    <v-btn class="mt-4" block type="submit" color="primary" :disabled="!valid">
      submit
    </v-btn>
  </v-form>
</template>

<script>
import TaskCard from "./Card.vue";

export default {
  name: "task-form",
  components: {
    "task-card": TaskCard,
  },
  // Props to receive task and mount component
  props: {
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
  },
  // Data to validate form
  data() {
    return {
      nameRules: [
        (v) => v.length > 5 || "At least 5 characters required",
        (v) => v.length < 25 || "Maximum of 25 characters",
        (v) => !!v || "Name is required",
      ],
      descriptionRules: [(v) => !!v || "Description is required"],
      valid: false,
    };
  },
  // Method to sendFrom, emiting event to view
  methods: {
    sendForm: function () {
      if (this.valid) {
        this.$emit("createOrUpdate", this.task);
      }
    },
  },
};
</script>
