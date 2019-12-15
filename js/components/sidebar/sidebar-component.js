import { SidebarTemplate } from './sidebar-template.js'

const SidebarComponent = {
  template: SidebarTemplate,
  data: function(){
    return {
      removetoggle: true
    }
  },
  methods: {
    removeToggle: function(){
      this.$store.dispatch("removeToggle");
    }
  }
}

export { SidebarComponent }