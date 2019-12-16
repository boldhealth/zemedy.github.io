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
    window.scrollTo(0,0);
    var testimonialIndex = 0;
    try {
      showTestimonialSlides();
    } catch {
      //
    }
    function currentSlide(n) {
      testimonialIndex = n;
      clearTimeout(window.slideTimer);
      showTestimonialSlides();
    }
    function showTestimonialSlides() {
      var i;
      var slides = document.getElementsByClassName("testimonial");
      var dots = document.getElementsByClassName("dot");

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      testimonialIndex++;

      if (testimonialIndex > slides.length) {
        testimonialIndex = 1;
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" tactive", "");
      }

      slides[testimonialIndex - 1].style.display = "block";
      dots[testimonialIndex - 1].className += " tactive";
      window.slideTimer = setTimeout(showTestimonialSlides, 4000);
    }
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
  }
}

export { HomeComponent }