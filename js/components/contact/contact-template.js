const ContactTemplate = 
`
  <div>
    <sidebar-component></sidebar-component>
    <div class="contactwrapper">
      <header-component></header-component>
      <section class="bg-section-web1" >
            <div class="lg_infor-web1">
              <h1>Contact us</h1>
              <h2>Like what we do?  Get in touch!</h2>
            </div>
          </section>
   
          <div class="app-main-web2">
            <h5 class="sign-if"> 
            If you’re interested in what we’re doing or have a question, fill in the form below and we’ll get back to you in 1-2 working days!.</h5>
            
            <form @submit="formSubmit">
              <div class="sign-up-wrapper-web">
                 <label class="em-add">Name*</label>
                 <input type="text" class="first-input-web" v-model="name"></input>
              </div>
              <div class="float-rigt">
                <label class="em-add">Email address*</label>
                <input type="email" class="first-input-web2" v-model="email"></input>
              </div>
              <div style="clear:both"></div>
              <div class="meg-wrapper">
                <label class="em-add">Message*</label>
                <textarea class="message-web" v-model="message"></textarea>
              </div>
              <div class="submit-web1" >
                <button class="submitbtn">Submit</button>
              </div>
              <br><br>
            </form>

            <p v-show="success" class="success-web">Success! Your message has been submitted. We’ll be in touch soon</p>
            <p v-show="failure" class="failure-web">Error! Something went wrong. Please try again later</p>
            </div>
     
            <section class="bg-section2" >
              <div class="lg_infor2">
                <h1>Contact us</h1>
                <h2>Like what we do? <br> Get in touch!</h2>
              </div>
            </section>

            <div class="app_bg">
              <div class="app-main">
             
                <p> 
                  If you’re interested in what we’re doing or have a question, fill in the form below and we’ll get back to you in 1-2 working days!.
                </p>

                <div class="sign-up-wrapper">
                    <label class="ad-top">Name*</label>
                    <input class="first-input"></input>
                </div>
                
                <div>
                    <label>Email address*</label>
                    <input class="first-input"></input>
                </div>
                    
                <div>
                    <label>Message*</label>
                    <input class="message"></input>
                </div>
                
                <button class="submit"> Submit</button>
                <p class="success">Success! Your message has been submitted. We’ll be in touch soon</p>

              </div>
            </div>

            <section class="get_app_section">
                <h5>Zemedy. The smart little app that helps you take control of your gut health.</h5>
                <div class="store_imgs_cont">
                    <a class="download_btn_red" href="https://apps.apple.com/gb/app/zemedy-ibs-gut-relief/id1442789941">
                        <img src="img/dl.svg">
                    </a>
                    <a class="download_btn_red" href="https://play.google.com/store/apps/details?id=com.zemedyApp">
                        <img src="img/dl1.svg">
                    </a>
                </div>
                <img class="halfiphone" src="img/halfiphone.png">
                <img class="halfiphoneweb" src="img/halfiphoneweb.png">
                <div style="clear: both;"></div>
            </section>
      <footer-component></footer-component>
    </div>
  </div>
`

export { ContactTemplate }