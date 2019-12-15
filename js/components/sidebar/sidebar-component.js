import { SidebarTemplate } from './sidebar-template.js'

const SidebarComponent = {
  template: SidebarTemplate,
  methods: {
    removeToggle: function(){
      this.$store.dispatch("removeToggle");
    }
  }
}

export { SidebarComponent }