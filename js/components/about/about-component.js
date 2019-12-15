import { AboutPage } from './about-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const AboutComponent = {
  mounted: function(){
    this.$store.dispatch("removeToggle");
  },
  data: function(){
    return {
      iphone: true,
      iphone1: false,
      iphone2: false,
      iphone3: false,
      iphone4: false 
    }
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponent
  },
  methods: {
    mouseLeave: function(){
      this.iphone = true;
      this.iphone1 = false; 
      this.iphone2 = false; 
      this.iphone3 = false; 
      this.iphone4 = false; 
    },
    mouseOver1: function(){
      this.iphone = false;
      this.iphone1 = true; 
      this.iphone2 = false; 
      this.iphone3 = false; 
      this.iphone4 = false; 
    },
    mouseOver2: function(){
      this.iphone = false;
      this.iphone1 = false; 
      this.iphone2 = true; 
      this.iphone3 = false; 
      this.iphone4 = false; 
    },
    mouseOver3: function(){
      this.iphone = false;
      this.iphone1 = false; 
      this.iphone2 = false; 
      this.iphone3 = true; 
      this.iphone4 = false; 
    },
    mouseOver4: function(){
      this.iphone = false;
      this.iphone1 = false; 
      this.iphone2 = false; 
      this.iphone3 = false; 
      this.iphone4 = true; 
    },
  },
  template: AboutPage
}

export { AboutComponent }