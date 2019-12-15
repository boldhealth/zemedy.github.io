const HeaderTemplate = 
` <div>
    <header class="appheader">
      <div class="ahleft">
        <a href="/#/">
          <img src="img/orangelogo.svg">
        </a>
      </div>
      <div @click="addToggle" id="menu-toggle" class="ahright">
        <a>
          <img src="img/menubar.svg">
        </a>
      </div>
      <div style="clear: both;"></div>
    </header>

    <header class="webheader">
        <ul>
            <li class="headerlist"><a href="/#/science">Science</a></li>
            <li class="headerlist"><a href="/#/about">About</a></li>
            <li class="headerlist"><a href="/#/">
                <img src="img/zemedylogo.svg">
            </a></li>
            <li class="headerlist"><a href="/#/contact">Contact us</a></li>
            <li class="hfirst header_icon"><a href="https://play.google.com/store/apps/details?id=com.zemedyApp">
                <img src="img/androidicon.svg">
            </a></li>
            <li class="header_icon"><a href="https://apps.apple.com/gb/app/zemedy-ibs-gut-relief/id1442789941">
                <img src="img/appleicon.svg">
            </a></li>
        </ul>
    </header>
  </div>
`

export { HeaderTemplate }