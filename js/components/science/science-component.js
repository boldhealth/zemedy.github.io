import { ScienceTemplate } from './science-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { GetAppComponent } from '../getapp/getapp-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const ScienceComponent = {
  mounted: function(){
    this.$store.dispatch("removeToggle");
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponent,
    'getapp-component': GetAppComponent
  },
  data: function() { 
    return {
      slide1: true,
      slide2: false 
    }
  },
  methods: {
    togglePhones: function(){
      if(this.slide1){
        this.slide2 = true;
        this.slide1 = false;
      } else {
        this.slide2 = false;
        this.slide1 = true;
      }
    } 
  },
  template: ScienceTemplate,
}
export { ScienceComponent }