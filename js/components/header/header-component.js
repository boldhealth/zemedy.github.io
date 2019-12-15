import { HeaderTemplate } from './header-template.js'

const HeaderComponent = {
  template: HeaderTemplate,
  methods: {
    addToggle: function(){
      this.$store.dispatch("addToggle");
    }
  }
}

export { HeaderComponent }