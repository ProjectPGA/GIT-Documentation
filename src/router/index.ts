import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import GitDescription from "@/views/GitDescription.vue";
import GitWorkflow from "@/views/GitWorkflow.vue";
import GitBasics from "@/views/GitBasics.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Description",
    component: GitDescription,
  },
  {
    path: "/git-basics",
    name: "Git Basics",
    component: GitBasics,
  },
  {
    path: "/git-workflow",
    name: "Git Workflow",
    component: GitWorkflow,
  },
  {
    path: "/git-rules",
    name: "Git Rules",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
