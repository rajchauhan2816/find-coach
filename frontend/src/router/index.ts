import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import CoachDetail from "../views/coaches/CoachDetail.vue";
import CoachesList from "../views/coaches/CoachesList.vue";
import CoachRegistration from "../views/coaches/CoachRegistration.vue";
import ContactCoach from "../views/requests/ContactCoach.vue";
import RequestReceived from "../views/requests/RequestReceived.vue";
import NotFound from "../views/NotFound.vue";
import LogIn from "../views/Auth/LogIn.vue";
import SignUp from "../views/Auth/SignUp.vue";
import store from "@/store/index";

function guardMyroute(
  _: any,
  _2: any,
  next: any,
) {
  const isAuthenticated = store.getters["isAuthenticated"];
  //this is just an example. You will have to find a better or
  // centralised way to handle you localstorage data handling
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/auth/login"); // go to '/login';
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/coaches",
    beforeEnter: guardMyroute,
  },
  {
    path: "/coaches",
    component: CoachesList,
    beforeEnter: guardMyroute,
  },
  {
    path: "/coaches/:id",
    component: CoachDetail,
    props: true,
    children: [
      {
        path: "contact",
        component: ContactCoach,
      },
    ],
    beforeEnter: guardMyroute,
  },
  {
    path: "/register",
    component: CoachRegistration,
    beforeEnter: guardMyroute,
  },
  {
    path: "/auth/login",
    component: LogIn,
  },
  {
    path: "/auth/signup",
    component: SignUp,
  },
  {
    path: "/requests",
    component: RequestReceived,
    beforeEnter: guardMyroute,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
