import { ContactTemplate } from './contact-template.js'
import { HeaderComponent } from '../header/header-component.js'
import { FooterComponent } from '../footer/footer-component.js'
import { SidebarComponent } from '../sidebar/sidebar-component.js'

const ContactComponent = {
  mounted: function(){
    if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
    } else {
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
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
        api_user: 'app96320335@heroku.com',
        api_key: 'xgutuu4o4444',
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