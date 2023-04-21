import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    name: "admin",
    path: "/",
    component: () => import("../pages/admin.vue"),
  },
  {
    name: "book",
    path: "/books",
    component: () => import("../pages/book/index.vue"),
  },
  {
    name: "book-id",
    path: "/books/:id",
    component: () => import("../pages/book/id.vue"),
  },
  {
    name: "activity",
    path: "/activities",
    component: () => import("../pages/activity/index.vue"),
  },
  {
    name: "activity-id",
    path: "/activities/:id",
    component: () => import("../pages/activity/id.vue"),
  },
  {
    name: "photo",
    path: "/photos",
    component: () => import("../pages/photo/index.vue"),
  },
  {
    name: "photo-id",
    path: "/photos/:id",
    component: () => import("../pages/photo/id.vue"),
  },
  {
    name: "user",
    path: "/users",
    component: () => import("../pages/user/index.vue"),
  },
  {
    name: "user-id",
    path: "/users/:id",
    component: () => import("../pages/user/id.vue"),
  },
  {
    name: "author",
    path: "/authors",
    component: () => import("../pages/author/index.vue"),
  },
  {
    name: "author-id",
    path: "/authors/:id",
    component: () => import("../pages/author/id.vue"),
  },
  {
    name: "register",
    path: "/login/register",
    component: () => import("../pages/login/register.vue"),
    meta: {
      layout: "login",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
