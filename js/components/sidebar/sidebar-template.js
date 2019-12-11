const SidebarTemplate = 
  `
    <div id="sidebar-wrapper">
        <div class="sw-header">
            <div class="swhleft">
                <a href="/zemedy-html/#/">
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
                <a href="/zemedy-html/#/about">
                     About
                </a>
            </li>
            <li class="sbbold">
                <a href="/zemedy-html/#/science">
                     Science
                </a>
            </li>
            <li class="sbbold">
                <a href="/zemedy-html/#/contact">
                     Contact us
                </a>
            </li>
            <li class="sbsmall">
                <a href="/zemedy-html/#/terms">
                     Terms of use
                </a>
            </li>
            <li class="sbsmall">
                <a href="/zemedy-html/#/privacy">
                     Privacy
                </a>
            </li>
            <li class="sbsmall">
                <a href="/zemedy-html/#/accessibility">
                     Accessibility
                </a>
            </li>
            <li class="sbbutton">
                <a href="/zemedy-html/#/terms">
                    <button class="btn sb-btn">download</button>
                </a>
            </li>
            <li class="sbicons">
                <a href="/zemedy-html/#/contact"><i class="far fa-envelope"></i></a>
                <a href="https://www.facebook.com/tryzemedy/"><i class="fab fa-facebook-f"></i></a>
                <a href="https://twitter.com/tryzemedy"><i class="fab fa-twitter"></i></a>
                <a href="/zemedy-html/#/terms"><i class="fab fa-linkedin"></i></a>
                <a href="https://www.instagram.com/tryzemedy/"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>
    </div>
  `
export { SidebarTemplate }