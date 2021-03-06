import { TermsTemplate } from './terms-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const TermsComponent = {
  mounted: function(){
    window.scrollTo(0,0);
    this.$store.dispatch("removeToggle");
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponent
  },
  template: TermsTemplate,
}

export { TermsComponent }