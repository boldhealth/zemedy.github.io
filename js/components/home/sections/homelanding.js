const HomeLanding = {
  template: `
    <section class="homelanding">
        <h2>We know IBS is a pain</h2>
        <h2 class="secondline">Let us help you with that</h2>
        <div class="download_container">
            <a class="download_btn" href="https://apps.apple.com/gb/app/zemedy-ibs-gut-relief/id1442789941">
                <img src="img/dl.svg">
            </a>
            <a class="download_btn" href="https://play.google.com/store/apps/details?id=com.zemedyApp">
                <img src="img/dl1.svg">
            </a>
            <div style="clear: both"></div>
        </div>
        <div class="apps_img_container">
            <img src="img/apple-apps.svg">
            <img class="ce_img_web" src="img/ce.svg" >
        </div>
        
        <img class="institutes_img lazyload" data-src="img/institutes.png">
        <img class="institutes_img_web lazyload" data-src="img/institutesweb.png">
    </section>
  `
};

export { HomeLanding };
