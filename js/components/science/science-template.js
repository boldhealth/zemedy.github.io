const ScienceTemplate = 
`
  <div>
    <sidebar-component></sidebar-component>
    <div class="sciencewrapper">
      <header-component></header-component>
      <section class="sciencelanding">
          <h5>SCIENCE</h5>
          <h2>Zemedy uses cognitive behavioural therapy to help reduce your flare ups</h2>
      </section>

      <section class="sciencelandingweb">
          <img src="img/sciencelanding.svg">
      </section>

      <section class="cbt_section">
        <p>Cognitive Behavioural Therapy</p>  
          <hr>
          <h2>Negative emotions are hard to change & <br> that can make your IBS worse</h2>
          <h5>But with the help of CBT, you can target difficult emotions like stress and anxiety with clever cognitive techniques. Practicing these techniques is what sets CBT apart from other talking therapies - it's a 'doing' therapy as well.</h5>
      </section>

      <section class="cbt_explainer">
          <div class="ce_top">
            <img src="img/sciencebrain.svg">
            <h5>CBT builds a set of skills that helps you</h5>
          </div>
          <div style="clear: both"></div>
          <div class="ce_bottom">
            <p class="first">Identify how situations, thoughts, and behaviours influence emotions</p>
            <img src="img/arrow1.svg">
            <p class="mid">Become aware of thoughts and emotions</p>
            <img src="img/arrow2.svg">
            <p class="last">Improve feelings by changing dysfunctional thoughts and behaviours</p>
          </div>
          <div style="clear: both"></div>
      </section>

      <section class="why_cbt_section">
          <div class="cbt_left">
            <h5>Why CBT for IBS?</h5>
            <p>It’s a treatment you’ve probably heard of (or gone through) for anxiety and depression. Luckily, doctors and researchers have found that it’s also effective for IBS, even more so than diet and medication!</p>
            <div class="cl_img">
              <img src="img/graph.png">
            </div>
          </div>
          <div class="cbt_right">
            <h5>The Vicious Cycle</h5>
            <p>Our flare ups are often triggered by stress and anxiety, and then getting stressed or anxious about the condition in the first place can cause even more symptoms, <strong> what therapists call a ‘vicious cycle’.</strong></p>
            <div class="cb_img">
             <img src="img/cycle.png">
            </div>
          </div>
          <div style="clear: both;"></div>
      </section>

      <section class="nhs_section">
        <h5>The NHS provides this treatment but availability is limited, waiting lists are long and referrals can take months. That's why we created <span>Zemedy</span>.</h5>
        <img class="bumps_image" src="img/bumps.svg">
      </section>

      <section class="brain_gut_section">
        <p>Brain-Gut axis</p>
        <hr>
        <h2>Ever been told to “go with your gut” or<br> felt nervous “butterflies”?</h2>
        <h5>You’re probably getting signals from your “gut brain”! Hidden in the walls of the digestive system, this brain in your gut has 500 million neurons. The link between digestion, mood, health is very deep and contributes to IBS.</h5>  
      </section>

      <section class="gut_brain_section">
        <h5>The gut-brain axis major players</h5>

          <div class="gbsbox">
            <img src="img/exp1.svg">
            <p><strong>Microbiome</strong></p>
            <p class="p14">The gut microbiome is made up of bacteria, fungi & viruses that live in the gut</p>
          </div>
          <div class="gbsbox">
            <img src="img/exp2.svg">
            <p><strong>Neurotransmitters</strong></p>
            <p class="p14">Neurotransmitters are chemicals used by the brain and gut to ‘talk’ to each other</p>
          </div>
          <div class="gbsbox">
            <img src="img/exp3.svg">
            <p><strong>Seritonin</strong></p>
            <p class="p14">The “happy” hormone! It’s vital in regulating mood, sleep and healing</p>
          </div>
          <div class="gbsboxl">
            <img src="img/exp4.svg">
            <p><strong>The Vagus Nerve</strong></p>
            <p class="p14">This chunky nerve connects your gut and brain, sending signals in both directions</p>
          </div>
          <div style="clear: both"></div>
      </section>

      <section class="image_slide_section">
        <div class="is_web">
          <img v-show="slide1" src="img/slide1.png">
          <img v-show="slide2" src="img/slide2.png">
          <div @click="togglePhones" class="slide_control" v-bind:class="{ slide_active: slide1 }">
          </div>
          <div @click="togglePhones" class="slide_control" v-bind:class="{ slide_active: slide2 }">
          </div>
          <div style="clear: both"></div>
        </div>
        <div class="is_mobile">
          <div class="is_mobile_scroll">
            <img v-show="slide1" src="img/slide1.png">
            <img v-show="slide2" src="img/slide2.png">
          </div>
          <div @click="togglePhones" class="slide_control" v-bind:class="{ slide_active: slide1 }">
          </div>
          <div @click="togglePhones" class="slide_control" v-bind:class="{ slide_active: slide2 }">
          </div>
          <div style="clear: both"></div>
        </div>
      </section>

      <section class="zemedy_studies">
        <h2>Zemedy Studies</h2>
        <h5>We’re currently testing Zemedy to ensure efficacy and ease of use at renowned institutions in the United States and Europe.</h5>

        <div class="school_card">
          <img src="img/studies.svg">
          <h5>Acceptability and Efficacy of Zemedy App for IBS</h5>
          <p class="p_no_margin">Principal Investigator:</p>
          <p class="last_p p_no_margin">Melissa Hunt, Ph.D.</p>

          <p class="p_no_margin">University of Pennsylvania</p>
          <p class="p_no_margin">Office:  215-898-6478</p>
          <p class="p_no_margin">e-mail: mhunt@psych.upenn.edu</p>
              </div>

        <div class="school_card">
          <img src="img/studies1.svg">
          <h5>Testing Zemedy App for IBS</h5>
          <p class="p_no_margin">Principal Investigator:</p>
          <p class="last_p p_no_margin">Professor Claudia Witt</p>

          <p class="p_no_margin">Charité – Universitätsmedizin Berlin</p>
          <p class="p_no_margin">Charitépl. 1, 10117 Berlin, Germany</p>
        </div>

          <div style="clear: both"></div>
      </section>

      <section class="references_container">
        <h1>References</h1>  
        <h2>The technical science bit</h2>

        <div class="reference_container">
          <p class="p14">
            Digital Therapeutics: An Integral Component of Digital <br>
            Innovation in Drug Development <br>
            Oleksandr Sverdlov, Joris van Dam et al. <br>
            Clinical Pharmacology and Therapeutics (2018)
          </p>
          <hr>
          <p class="p14">
            Could digital therapeutics be a game changer in psychiatry? <br>
            Chul Hyun Cho, Heon Jeong Lee <br>
            Psychiatry Investigation (2019)
          </p>
          <hr>
          <p class="p14">
            Irritable bowel syndrome treatment: Cognitive behavioral
            therapy versus medical treatment
            Majid Mahvi-Shirazi, Ali Fathi-Ashtiani et al.
            Archives of Medical Science (2012)
          </p>
          <hr>
          <p class="p14">
            Brief cognitive-behavioral internet therapy for irritable bowel syndrome
            Melissa G. Hunt, Samantha Moshier et al.
            Behaviour Research and Therapy (2009)
          </p>
          <hr class="last_hr">
        </div>
        <div class="reference_container">
          <p class="p14 ps1">
            Improvement in Gastrointestinal Symptoms After Cognitive Behavior Therapy for Refractory Irritable Bowel Syndrome.
            Jeffrey M Lackner, James Jaccard et al.
            Gastroenterology (2018)
          </p>
          <hr>
          <p class="p14 ps2">
            That gut feeling
            Siri Carpenter
            American Psychological Association (2012)
          </p>
          <hr>
          <p class="p14">
            Effects of Serotonin and Slow-Release 5-Hydroxytryptophan on 
            Gastrointestinal Motility in a Mouse Model of Depression
            Narek Israelyan, Andrew Del Colle et al.
            Gastroenterology (2019)
          </p>
        </div>
        <div style="clear: both;"></div>
      </section>

      <section class="references_container_web">
        <h1>References</h1> 
        <h2>The technical science bit</h2>

        <div class="reference_container">
          <p class="p14">
            Digital Therapeutics: An Integral Component of Digital <br>
            Innovation in Drug Development <br>
            Oleksandr Sverdlov, Joris van Dam et al. <br>
            Clinical Pharmacology and Therapeutics (2018)
          </p>
          <p class="p14">
            Could digital therapeutics be a game changer in psychiatry? <br>
            Chul Hyun Cho, Heon Jeong Lee <br>
            Psychiatry Investigation (2019)
          </p>
          <div style="clear: both;"></div>
          <hr>
        </div>

        <div class="reference_container">
          <p class="p14">
            Irritable bowel syndrome treatment: Cognitive behavioral
            therapy versus medical treatment
            Majid Mahvi-Shirazi, Ali Fathi-Ashtiani et al.
            Archives of Medical Science (2012)
          </p>
          <p class="p14">
            Brief cognitive-behavioral internet therapy for irritable bowel syndrome
            Melissa G. Hunt, Samantha Moshier et al.
            Behaviour Research and Therapy (2009)
          </p>
          <div style="clear: both;"></div>
          <hr>
        </div>

        <div class="reference_container">
          <p class="p14 ps1">
            Improvement in Gastrointestinal Symptoms After Cognitive Behavior Therapy for Refractory Irritable Bowel Syndrome.
            Jeffrey M Lackner, James Jaccard et al.
            Gastroenterology (2018)
          </p>
          <p class="p14 ps2">
            That gut feeling
            Siri Carpenter
            American Psychological Association (2012)
          </p>
          <div style="clear: both;"></div>
          <hr>
        </div>
        <div class="reference_container">
          <p class="p14">
            Effects of Serotonin and Slow-Release 5-Hydroxytryptophan on 
            Gastrointestinal Motility in a Mouse Model of Depression
            Narek Israelyan, Andrew Del Colle et al.
            Gastroenterology (2019)
          </p>
          <div style="clear: both;"></div>
        </div>
      </section>

      <getapp-component></getapp-component>
      <footer-component></footer-component>
    </div>
  </div>
`

export { ScienceTemplate }