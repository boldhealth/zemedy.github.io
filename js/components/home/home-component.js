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
  template: HomepageTemplate,
  mounted: function(){
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  },
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