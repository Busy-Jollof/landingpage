import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../components/LandingPage.vue";
import AboutUs from "../components/AboutUs.vue";
import LaunchWithUs from "../components/LaunchWithUs.vue";
import ServicesForEveryone from "@/components/ServicesForEveryone.vue";
import ServicesRestaurantOwners from "@/components/ServicesRestaurantOwners.vue";
import ServicesForDeliveryDrivers from "@/components/ServicesForDeliveryDrivers.vue";
import FAQ from "@/components/FAQPage.vue";
import ContactUs from "@/components/ContactUs.vue";
import TimeLine from "@/components/TimeLine.vue";
import Home from "@/components/Home.vue";
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LandingPage,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () =>
        //   import(/* webpackChunkName: "about" */ "@/components/AboutUs.vue"),
        component: AboutUs,
      },
      {
        path: "/launch-with-us",
        name: "launch-with-us",
        component: LaunchWithUs,
      },
      {
        path: "/services-for-everyone",
        name: "services-for-everyone",
        component: ServicesForEveryone,
      },
      {
        path: "/services-restaurant-owners",
        name: "services-restaurant-owners",
        component: ServicesRestaurantOwners,
      },
      {
        path: "/services-delivery-drivers",
        name: "services-delivery-drivers",
        component: ServicesForDeliveryDrivers,
      },
      {
        path: "/FAQ",
        name: "FAQ",
        component: FAQ,
      },
      {
        path: "/timeline",
        name: "timeline",
        component: TimeLine,
      },
      {
        path: "/contact-us",
        name: "contact-us",
        component: ContactUs,
      },
      
    ],
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
