const AboutPage = `
  <div>
    <sidebar-component></sidebar-component>
    <div class="aboutwrapper">
      <header-component></header-component>
      <section class="applanding_container">
          <img class="ropebg" src="img/ropebg.svg">
          <div class="aboutlanding">
              <h1>Our Story</h1>
              <h2>Founded by a doctor and an IBS patient</h2>
              <p>Many people with IBS tell us they feel it rules their lives . So we created Zemedy to give patients back control over their own health.</p>
              <a href="#web_about" id="readmore_web" class="btn blue-btn">Read more</a>
              <a href="#founders_section" id="readmore_mobile" class="btn blue-btn">Read more</a>
          </div>
          <div class="founders_img">
              <img class="fapp" src="img/founders.png">
              <img class="fweb" src="img/foundersweb.png">
          </div>
          <div style="clear: both;"></div>
      </section>
      <section id="web_about" class="web_about_img">
          <img src="img/weabout.png">
          <div class="about_animated">
            <div class="aa_download">
              <h2>Download <br> Zemedy today.</h2>
              <a class="download_btn" href="https://apps.apple.com/gb/app/zemedy-ibs-gut-relief/id1442789941">
                  <img src="img/dl.svg">
              </a>
              <br>
              <a class="download_btn" href="https://play.google.com/store/apps/details?id=com.zemedyApp">
                  <img src="img/dl1.svg">
              </a>
              <div style="clear: both"></div>
            </div>
            <div class="aa_phone_images">
              <img id="iphone" src="img/iphone.png">
              <img id="iphone1" class="ip" src="img/iphone1.png">
              <img id="iphone2" class="ip" src="img/iphone2.png">
              <img id="iphone3" class="ip" src="img/iphone3.png">
              <img id="iphone4" class="ip" src="img/iphone4.png">
            </div>
            <div class="aa_programs">
              <div id="card1" class="program_card">
                <h5>10-week CBT programme</h5>
                <p>Throughout the programme we’ll be introducing you to specialist CBT techniques that will help you manage your symptoms and stress</p>
              </div>
              <div id="card2" class="program_card">
                <h5>Relaxation practices</h5>
                <p>Just like if you were seeing a CBT therapist, you’ll be given 'homework' after each session. These come in the form of ‘Practices’, such as relaxation activities or goal setting.</p>
              </div>
              <div id="card3" class="program_card">
                <h5>Gut-focused hypnotherapy</h5>
                <p>Hypnotherapy exercises were designed by Professor Whorwell, the leading clinician in this field. His dulcet tones will lull your gut into a state of deep relaxation.</p>
              </div>
              <div id="card4" class="program_card">
                <h5>Flare mode</h5>
                <p>Flare mode is designed to deliver quick relaxation exercises and tips for when you need it the most.</p>
              </div>
            </div>
            <div style="clear: both"></div>
          </div>

          <div class="tackle_section">
            <div class="tackle_text_container">
              <h2>We'll tackle it together bit by bit</h2>
              <h5>You'll build up to new things with each session so taking on IBS doesn't feel overwhelming. That’s why we’ve built in your very own IBS coach, Elle!</h5>
            </div>
            <div class="tackle_img">
              <img src="img/aboutdiagram.svg">
            </div>
            <div style="clear: both"></div>
          </div>
          
          <div class="experts_section">
            <h2>Zemedy’s IBS Experts</h2>
            <h5>We've got a team of doctors and scientists who have spent their careers studying and creating cognitive and digital therapy</h5>

            <div class="expert_card">
                <img src="img/profpeter.svg">
                <h5>Professor Peter Whorwell</h5>
                <p>Professor of Medicine & Gastroenterology</p>
                <p class="p14">University of Manchester</p>
            </div>

            <div class="expert_card">
                <img src="img/profnewt.svg">
                <h5>Professor Newton Howard</h5>
                <p>Professor of Neuroscience</p>
                <p class="p14">University of Oxford</p>
            </div>

            <div class="expert_card">
                <img src="img/helen.svg">
                <h5>Helen Burton-Murray</h5>
                <p>Clinical & Research Fellow</p>
                <p class="p14">Mass Gen Hospital</p>
            </div>

            <div class="expert_card">
                <img src="img/profclaudia.svg">
                <h5>Professor Claudia Witt</h5>
                <p>Director of Medicine</p>
                <p class="p14">University of Zurich</p>
            </div>

            <div class="expert_card">
                <img src="img/drannie.svg">
                <h5>Dr Annie Lau</h5>
                <p>Senior Research Fellow</p>
                <p class="p14">Macquarie University</p>
            </div>

            <div class="expert_card">
                <img src="img/drmelissa.svg">
                <h5>Dr Melissa Hunt</h5>
                <p>Associate Director of Clinical Training</p>
                <p class="p14">University of Pennsylvania</p>
            </div>
            <div style="clear: both;"></div>
          </div>
      </section>

      <section id="founders_section" class="founder_section">
          <h2>There’s no easy solution to irritable bowels</h2>
          <p>But here at Zemedy, we believe there are better ways to manage IBS than just a diet or medication.</p>

          <p>IBS symptoms are closely related to mental wellbeing. Our cognitive programme and practical management tips combine to help you soothe your IBS symptoms.</p>

          <div class="dl_left">
              <h5>Download Zemedy today.</h5>
              <img src="img/appstore.svg">
              <img src="img/androidstore.svg">
          </div>
          <div class="dl_right">
              <img src="img/iphone.png">
          </div>
          <div style="clear:both"></div>

          <div class="prog_card">
              <h5>10-week CBT programme</h5>
              <p class="p14">Throughout the programme we’ll be introducing you to specialist CBT techniques that will help you manage your symptoms and stress</p>
          </div>

          <div class="prog_card">
              <h5>Relaxation practices</h5>
              <p class="p14">Just like if you were seeing a CBT therapist, you’ll be given 'homework' after each session. These come in the form of ‘Practices’, such as relaxation activities or goal setting.</p>
          </div>

          <div class="prog_card">
              <h5>Gut-focused hypnotherapy</h5>
              <p class="p14">Hypnotherapy exercises were designed by Professor Whorwell, the leading clinician in this field. His dulcet tones will lull your gut into a state of deep relaxation.</p>
          </div>

          <div class="prog_card">
              <h5>Flare mode</h5>
              <p class="p14">Flare mode is designed to deliver quick relaxation exercises and tips for when you need it the most.</p>
          </div>

          <img class="aboutdiagram" src="img/aboutdiagram.svg">

          <h2>We'll tackle it together bit by bit</h2>

          <h5 class="myh5">You'll build up to new things with each session so taking on IBS doesn't feel overwhelming. That’s why we’ve built in your very own IBS coach, Elle!</h5>

          <h2>Science & research advisors</h2>

          <div class="prof_card">
              <img src="img/profpeter.png">
              <h5>Professor Peter Whorwell</h5>
              <p>Professor of Medicine & Gastroenterology</p>
              <p class="p14">University of Manchester</p>
          </div>

          <div class="prof_card">
              <img src="img/profnewt.png">
              <h5>Professor Newton Howard</h5>
              <p>Professor of Neuroscience</p>
              <p class="p14">University of Oxford</p>
          </div>

          <div class="prof_card">
              <img src="img/helen.png">
              <h5>Helen Burton-Murray</h5>
              <p>Clinical & Research Fellow</p>
              <p class="p14">Mass Gen Hospital</p>
          </div>

          <div class="prof_card">
              <img src="img/profclaudia.png">
              <h5>Professor Claudia Witt</h5>
              <p>Director of Medicine</p>
              <p class="p14">University of Zurich</p>
          </div>

          <div class="prof_card">
              <img src="img/drannie.png">
              <h5>Dr Annie Lau</h5>
              <p>Senior Research Fellow</p>
              <p class="p14">Macquarie University</p>
          </div>

          <div class="prof_card">
              <img src="img/drmelissa.png">
              <h5>Dr Melissa Hunt</h5>
              <p>Associate Director of Clinical Training</p>
              <p class="p14">University of Pennsylvania</p>
          </div>

      </section>
      <section class="committed_section">
          <h2>We’re committed to providing you with</h2>
          <div class="cs_box">
              <h5>A personal touch</h5>
              <img src="img/g.png">
              <p>Our product is built around you and your needs. We provide personal solutions to a personal problem.</p>
          </div>

          <div class="cs_box">
              <h5>Accuracy</h5>
              <img src="img/g1.png">
              <p>Zemedy was created by leading IBS experts, which means the programme is science and data-driven (and used by the NHS)</p>
          </div>

          <div class="cs_box">
              <h5>Acessibility</h5>
              <img src="img/g2.png">
              <p>IBS can come on suddenly and urgently. Thats why we made Zemedy accessible at any time and wherever you are.</p>
          </div>
          <div style="clear: both"></div>
      </section>

      <div class="ps_container"> 
        <section class="promise_section">
            <img class="ourpromise" src="img/ourpromise.png">
            <div class="psimg_container">
              <img class="fappwe" src="img/g3.png">
            </div>
            <div class="our_promise_cont">
                <h2>Our promise</h2>

                <p>We understand the complicated relationship between IBS and healthcare, so we designed Zemedy as a way to lift the daily burden of your health.</p>

                <p>We promise to always provide you with the most accurate, up-to-date IBS information.</p>

                <p>Our products will always be centred around you and your needs. Everything we do is carefully crafted around the IBS experience.</p>

                <h5>We'll never stop trying to improve. So if you have a suggestion on what we could be doing better or what you’d like to see more of, please <span><a href="/#/contact"> contact us </a> </span></h5>
            </div> 
            <div style="clear: both"></div>
        </section>
      </div>
      <footer-component></footer-component>
    </div>
  </div>
`;

export { AboutPage };
