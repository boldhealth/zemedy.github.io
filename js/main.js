import Vue from "./vue.js";
import { HomeComponent } from "./components/home/home-component.js";
import { MainTemplate } from "./components/main-template.js";
import { AboutComponent } from "./components/about/about-component.js";
import { ScienceComponent } from "./components/science/science-component.js";
import { TermsComponent } from "./components/terms/terms-component.js";
import { PrivacyComponent } from "./components/privacy/privacy-component.js";
import { AccessibilityComponent } from "./components/accessibility/accessibility-component.js";
import { ContactComponent } from "./components/contact/contact-component.js";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    toggled: false
  },
  mutations: {
    addToggle: (state) => {
      return state.toggled = true;
    },
    removeToggle: (state) => {
      return state.toggled = false;
    }
  },
  actions: {
    addToggle({ commit }) {
      commit('addToggle');
    },
    removeToggle({ commit }) {
      commit('removeToggle');
    }
  },
  getters: {
    toggled: state => {
      return state.toggled; 
    }
  }
})

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeComponent,
      name: "Home"
    },
    {
      path: "/about",
      component: AboutComponent,
      name: "About Zemedy"
    },
    {
      path: "/science",
      component: ScienceComponent,
      name: "Science"
    },
    {
      path: "/terms",
      component: TermsComponent,
      name: "Terms"
    },
    {
      path: "/privacy",
      component: PrivacyComponent,
      name: "Privacy"
    },
    {
      path: "/accessibility",
      component: AccessibilityComponent,
      name: "Accessibility"
    },
    {
      path: "/contact",
      component: ContactComponent,
      name: "Contact Zemedy"
    }
  ]
});
export default router;

new Vue({
  el: "#app",
  router,
  store,
  template: MainTemplate,
  mounted: function(){
    this.$store.dispatch("removeToggle");
  },
  computed: {
    toggled(){
      return this.$store.getters.toggled;
    }
  }
});
