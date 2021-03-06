import { AccessibilityTemplate } from './accessibility-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const AccessibilityComponent = {
  mounted: function(){
    this.$store.dispatch("removeToggle");
    window.scrollTo(0,0);
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponent
  },
  template: AccessibilityTemplate,
}

export { AccessibilityComponent }