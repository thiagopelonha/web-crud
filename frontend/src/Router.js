import Vue from "vue";
import Router from "vue-router";
import Tasks from "./views/Tasks.vue";
import TasksNew from "./views/Tasks/New.vue";
import TasksShow from "./views/Tasks/Show.vue";
import TasksEdit from "./views/Tasks/Edit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "/tasks",
    },
    {
      path: "/tasks",
      name: "tasks",
      component: Tasks,
    },
    {
      path: "/tasks/new",
      name: "new-task",
      component: TasksNew,
    },
    {
      path: "/tasks/:id",
      name: "show",
      component: TasksShow,
    },
    {
      path: "/tasks/:id/edit",
      name: "edit",
      component: TasksEdit,
    },
  ],
});
