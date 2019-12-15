import { HeaderTemplate } from './header-template.js'

const HeaderComponent = {
  template: HeaderTemplate,
  data: function(){
    return {
      removetoggle: false
    }
  },
  methods: {
    addToggle: function(){
      console.log('add toggle clicked');
      this.$store.dispatch("addToggle");
      let mystate = this.$store.state.toggled;
      console.log('mounted, menu toggle:', mystate);
    }
  }
}

export { HeaderComponent }