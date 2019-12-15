import { AboutPage } from './about-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const AboutComponent = {
  mounted: function(){
    this.$store.dispatch("removeToggle");
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponent
  },
  template: AboutPage
}

export { AboutComponent }