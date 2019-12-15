import { HomepageTemplate } from './home-template.js'
import { HomeLanding } from './sections/homelanding.js'
import { InfoSection } from './sections/infosection.js'
import { ScienceBehind } from './sections/sciencebehind.js'
import { Testimonials } from './sections/testimonials.js'
import { GetAppComponent } from '../getapp/getapp-component.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const HomeComponent = {
  mounted: function(){
    this.$store.dispatch("removeToggle");
  },
  template: HomepageTemplate,
  components: {
    'header-component': HeaderComponent,
    'sidebar-component': SidebarComponent,
    'homelanding-section': HomeLanding,
    'infosection': InfoSection,
    'testimonials-section': Testimonials,
    'sciencebehind-section': ScienceBehind,
    'getapp-section': GetAppComponent,
    'footer-component': FooterComponent
  },
}

export { HomeComponent }