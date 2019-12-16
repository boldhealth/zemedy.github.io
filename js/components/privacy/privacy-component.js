import { PrivacyTemplate } from './privacy-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const PrivacyComponent = {
  mounted: function(){
    this.$store.dispatch("removeToggle");
    window.scrollTo(0,0);
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponent
  },
  template: PrivacyTemplate,
}

export { PrivacyComponent }