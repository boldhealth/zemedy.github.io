import { ContactTemplate } from './contact-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const ContactComponent = {
  mounted: function(){
    this.$store.dispatch("removeToggle");
    window.scrollTo(0,0);
  },
  data: function(){
    return {
      success: false,
      failure: false,
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    formSubmit(e){
      e.preventDefault();
      axios.post('https://api.sendgrid.com/api/mail.send.json', {
        api_user: 'hello@zemedy.com',
        api_key: 'boldhealth2019',
        to: 'hello@zemedy.com',
        subject: 'Form submission from Zemedy website',
        text: this.message,
        from: this.email
      })
      .then(function (response) {
        this.success = true;
      })
      .catch(function (error) {
        this.failure = true;
      });
    }
  },
  components: {
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
    'sidebar-component': SidebarComponent
  },
  template: ContactTemplate,
}

export { ContactComponent }