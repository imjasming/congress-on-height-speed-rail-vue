<template>
  <div class="super_container">

    <!-- Menu -->

    <div class="menu trans_500">
      <div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">
        <div class="menu_close_container"><div class="menu_close"></div></div>
        <div class="logo menu_logo">
          <a href="#">
            <div class="logo_container d-flex flex-row align-items-start justify-content-start">
              <div class="logo_image"><div><img src="../../assets/logo.png" alt=""></div></div>
              <div class="logo_content">
                <div class="logo_text logo_text_not_ie">The Conference</div>
                <div class="logo_sub">August 25, 2018 - Miami Marina Bay</div>
              </div>
            </div>
          </a>
        </div>
        <ul>
          <li class="menu_item"><a href="/home">Home</a></li>
          <li class="menu_item"><a href="#">About us</a></li>
          <li class="menu_item"><a href="#">Speakers</a></li>
          <li class="menu_item"><a href="#">Tickets</a></li>
          <li class="menu_item"><a href="/news">News</a></li>
          <li class="menu_item"><a href="/contact">Contact</a></li>
        </ul>
      </div>
      <div class="menu_social">
        <div class="menu_social_title">Follow uf on Social Media</div>
        <ul>
          <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
          <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>

    <!-- Home -->

    <div class="home">
      <div class="parallax_background parallax-window" data-parallax="scroll" :style="{ background: 'url(' + require('../../assets/contact.jpg')+')'}" data-speed="0.8"></div>

      <!-- Header -->

      <header class="header" id="header">
        <div>
          <div class="header_top">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="header_top_content d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <a href="#">
                        <div class="logo_container d-flex flex-row align-items-start justify-content-start">
                          <div class="logo_image"><div><img src="../../assets/logo.png" alt=""></div></div>
                          <div class="logo_content">
                            <div id="logo_text" class="logo_text logo_text_not_ie">The Conference</div>
                            <div class="logo_sub">August 25, 2018 - Miami Marina Bay</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="header_social ml-auto">
                      <ul>
                        <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                      </ul>
                    </div>
                    <div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header_nav" id="header_nav_pin">
            <div class="header_nav_inner">
              <div class="header_nav_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="header_nav_content d-flex flex-row align-items-center justify-content-start">
                        <nav class="main_nav">
                          <ul>
                            <li><a href="/home">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="/speaker">Speakers</a></li>
                            <li><a href="/events">Events</a></li>
                            <li><a href="/news">News</a></li>
                            <li class="active"><a href="/contact">Contact</a></li>
                          </ul>
                        </nav>
                        <div class="header_extra ml-auto">
                          <div class="header_search"><i class="fa fa-search" aria-hidden="true"></i></div>
                          <div class="button header_button"><a href="#">Buy Tickets Now!</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="search_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="search_content d-flex flex-row align-items-center justify-content-end">
                        <form action="#" id="search_container_form" class="search_container_form">
                          <input type="text" class="search_container_input" placeholder="Search" required="required">
                          <button class="search_container_button"><i class="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content d-flex flex-row align-items-end justify-content-start">
                <div class="current_page">Contact</div>
                <div class="breadcrumbs ml-auto">
                  <ul>
                    <li><a href="/home">Home</a></li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->

    <div class="contact">
      <div class="contact_map_background">

        <!-- Contact Map -->
        <div class="contact_map">

          <!-- Google Map -->
          <div class="map">
            <div id="google_map" class="google_map">
              <div class="map_container">
                <div id="map"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact_form_container">
              <div class="contact_form_title">Get in touch</div>
              <form action="#" class="contact_form" id="contact_form">
                <input type="text" class="contact_input" placeholder="Name" required="required">
                <input type="email" class="contact_input" placeholder="E-mail" required="required">
                <input type="text" class="contact_input" placeholder="Subject" required="required">
                <textarea name="contact_textarea" id="contact_textarea" class="contact_textarea contact_input" placeholder="Message" required="required"></textarea>
                <button class="button contact_button"><span>Send Message</span></button>
              </form>
            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="contact_info_container">
              <div>
                <a href="#">
                  <div class="logo_container d-flex flex-row align-items-start justify-content-start">
                    <div class="logo_image"><div><img src="../../assets/logo.png" alt=""></div></div>
                    <div class="logo_content">
                      <div id="logo_text" class="logo_text logo_text_not_ie">The Conference</div>
                      <div class="logo_sub">August 25, 2018 - Miami Marina Bay</div>
                    </div>
                  </div>
                </a>
              </div>
              <div class="contact_info_list_container">
                <ul class="contact_info_list">
                  <li class="d-flex flex-row align-items-start justify-content-start">
                    <div><div class="contact_info_icon text-center"><img src="../../assets/contact_1.png" alt=""></div></div>
                    <div class="contact_info_text">Blvd Libertad, 34 m05200 Los Angeles, CA</div>
                  </li>
                  <li class="d-flex flex-row align-items-start justify-content-start">
                    <div><div class="contact_info_icon text-center"><img src="../../assets/contact_2.png" alt=""></div></div>
                    <div class="contact_info_text">0034 37483 2445 322</div>
                  </li>
                  <li class="d-flex flex-row align-items-start justify-content-start">
                    <div><div class="contact_info_icon text-center"><img src="../../assets/contact_3.png" alt=""></div></div>
                    <div class="contact_info_text">hello@company.com</div>
                  </li>
                </ul>
              </div>
              <div class="contact_info_pin"><div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->

    <footer class="footer">
      <div class="footer_content">
        <div class="container">
          <div class="row">

            <!-- Footer Column -->
            <div class="col-lg-4 footer_col">
              <div class="footer_about">
                <div>
                  <a href="#">
                    <div class="logo_container d-flex flex-row align-items-start justify-content-start">
                      <div class="logo_image"><div><img src="../../assets/logo.png" alt=""></div></div>
                      <div class="logo_content">
                        <div id="logo_text" class="logo_text logo_text_not_ie">The Conference</div>
                        <div class="logo_sub">August 25, 2018 - Miami Marina Bay</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="footer_about_text">
                  <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
                </div>
              </div>
            </div>

            <!-- Footer Column -->
            <div class="col-lg-3 footer_col">
              <div class="footer_links">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Speakers</a></li>
                  <li><a href="#">Event Dates</a></li>
                  <li><a href="#">Information</a></li>
                  <li><a href="#">Calendar</a></li>
                </ul>
              </div>
            </div>

            <!-- Footer Column -->
            <div class="col-lg-3 footer_col">
              <div class="footer_links">
                <ul>
                  <li><a href="#">Logistics</a></li>
                  <li><a href="#">Our Partners</a></li>
                  <li><a href="#">Testimonials</a></li>
                  <li><a href="#">Price Plans</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>

            <!-- Footer Column -->
            <div class="col-lg-2 footer_col">
              <div class="footer_links">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Speakers</a></li>
                  <li><a href="#">Event Dates</a></li>
                  <li><a href="#">Information</a></li>
                  <li><a href="#">Calendar</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="footer_extra">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="footer_extra_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-start justify-content-center">
                <div class="footer_social">
                  <div class="footer_social_title">Follow us on Social Media</div>
                  <ul class="footer_social_list">
                    <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-behance" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                <div class="footer_extra_right ml-lg-auto text-lg-right">
                  <div class="footer_extra_links">
                    <ul>
                      <li><a href="/contact">Contact us</a></li>
                      <li><a href="#">Sitemap</a></li>
                      <li><a href="#">Privacy</a></li>
                    </ul>
                  </div>
                  <!--<div class="copyright">&lt;!&ndash; Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. &ndash;&gt;
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    &lt;!&ndash; Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. &ndash;&gt;</div>-->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
  @import "../../style/home.css";
  @import "../../../static/css/contact.css";
  @import "../../../static/css/contact_responsive.css";
</style>
