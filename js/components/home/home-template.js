const HomepageTemplate = `
  <div>
    <sidebar-component></sidebar-component>
    <div class="homewrapper">
      <header-component></header-component>
      <img class="landing_bg_img_web" src="img/landingbg.svg">
      <img class="landing_bg_img_app lazyload" data-src="img/landingbg.png">
      <img class="character_img" src="img/character.svg">
      <img class="ce_img" src="img/ce.svg">
      <homelanding-section></homelanding-section>
      <infosection></infosection>
      <section class="testimonialcontainer">
        <h5 class="testimonial">
          “It really clearly explained ibs and helped me to understand my symptoms and how I might react to those and what I could do when I experience symptoms.”
          <p>Ella</p>
        </h5>

        <h5 class="testimonial">
          “The only app that appears to address stress and anxiety as major triggers for IBS. Worth the trial”
          <p>Emiene</p>
        </h5>

        <h5 class="testimonial">
          “Thought methods really do work if you try and put them into practice. I also learnt that as the app suggests vigorous exercises will help things along. Give it a go. This is a great app.”
          <p>Heather</p>
        </h5>

        <h5 class="testimonial">
          “Hypnotherapy really helped me calm down during a flare up late last night. This app is incredible”
          <p>Marcus</p>
        </h5>

        <h5 class="testimonial">
          “This app has totally changed my life with IBS. It is like a best friend - whilst even close family and friends don’t want to hear more about my bowels. I see a psychiatrist for depression and anxiety and he wants to hear more about it.”
          <p>App Store (Anon)</p>
        </h5>
        <div class="tcircle">
          <i rel="0" @click="currentTestimonial" class="fas fa-circle tactive dot"></i>
          <i rel="1" class="fas fa-circle dot"></i>
          <i rel="2" class="fas fa-circle dot"></i>
          <i rel="3" class="fas fa-circle dot"></i>
          <i rel="4" class="fas fa-circle dot"></i>
        </div>
      </section>
      <sciencebehind-section></sciencebehind-section>
      <getapp-section></getapp-section>
      <footer-component></footer-component>
    </div>
  </div>
`;

export { HomepageTemplate };
