const SidebarTemplate = 
  `
    <div id="sidebar-wrapper">
        <div class="sw-header">
            <div class="swhleft">
                <a href="/#/">
                  <img class="side-img" src="img/whitelogo.svg"> 
                </a>
            </div>
            <div class="swhright">
                <img id="remove-toggle" class="side-img" src="img/closesidebar.svg"> 
            </div>
            <div style="clear: both;"></div>
        </div>
        <ul class="sidebarnav">
            <li class="sbbold">
                <a href="/#/about">
                     About
                </a>
            </li>
            <li class="sbbold">
                <a href="/#/science">
                     Science
                </a>
            </li>
            <li class="sbbold">
                <a href="/#/contact">
                     Contact us
                </a>
            </li>
            <li class="sbsmall">
                <a href="/#/terms">
                     Terms of use
                </a>
            </li>
            <li class="sbsmall">
                <a href="/#/privacy">
                     Privacy
                </a>
            </li>
            <li class="sbsmall">
                <a href="/#/accessibility">
                     Accessibility
                </a>
            </li>
            <li class="sbbutton">
                <a href="https://apps.apple.com/gb/app/zemedy-ibs-gut-relief/id1442789941">
                    <button class="btn sb-btn">download</button>
                </a>
            </li>
            <li class="sbicons">
                <a href="/#/contact"><i class="far fa-envelope"></i></a>
                <a href="https://www.facebook.com/tryzemedy/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/tryzemedy"><i class="fab fa-twitter"></i></a>
                <a href="/#/terms"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/tryzemedy/"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>
    </div>
  `
export { SidebarTemplate }