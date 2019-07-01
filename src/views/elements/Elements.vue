<template>
  <div class="super_container">
    <!-- Home -->

    <div class="home">
      <div class="parallax_background parallax-window" data-parallax="scroll" :style="{ background: 'url(' + require('../../assets/contact.jpg')+')'}" data-speed="0.8"></div>
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

    <!-- Elements -->

    <div class="elements">
      <div class="container">
        <div class="row">
          <div class="col">

            <!-- Buttons -->

            <div class="elements_buttons">
              <div class="elements_title">Buttons</div>
              <div class="buttons_container">
                <div class="button element_button button_1"><a href="#">Send Message</a></div>
                <div class="element_button button_2"><a href="#">Send Message</a></div>
                <div class="button element_button button_3"><a href="#">Send Message</a></div>
              </div>
            </div>

            <!-- Accordions & Tabs -->

            <div class="elements_accordions_tabs">
              <div class="elements_title">Accordions & Tabs</div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="elements_accordions">
                    <div class="accordions">

                      <div class="accordion_container">
                        <div class="accordion d-flex flex-row align-items-center"><div>Nunc in justo tincidunt, sodales nunc id, finibus nibh</div></div>
                        <div class="accordion_panel">
                          <div>
                            <p>Integer vel ex massa. Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt. Nullam libero velit, imperdiet quis mauris eget, accumsan elementum leo. Nullam eu massa accumsan, porta lectus qu</p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion_container">
                        <div class="accordion d-flex flex-row align-items-center"><div>Donec quis metus ac arcu luctus accumsan</div></div>
                        <div class="accordion_panel">
                          <div>
                            <p>Integer vel ex massa. Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt. Nullam libero velit, imperdiet quis mauris eget, accumsan elementum leo. Nullam eu massa accumsan, porta lectus qu</p>
                          </div>
                        </div>
                      </div>

                      <div class="accordion_container">
                        <div class="accordion d-flex flex-row align-items-center active"><div> Duis elementum diam eget eros tincidunt, at venenatis</div></div>
                        <div class="accordion_panel">
                          <div>
                            <p>Integer vel ex massa. Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt. Nullam libero velit, imperdiet quis mauris eget, accumsan elementum leo. Nullam eu massa accumsan, porta lectus qu</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="tabs">
                    <div class="tabs_container">
                      <div class="tabs d-flex flex-row align-items-center justify-content-start flex-wrap">
                        <div class="tab">Nunc in justo</div>
                        <div class="tab">Donecmetus</div>
                        <div class="tab active">Elementum</div>
                      </div>
                      <div class="tab_panels">
                        <div class="tab_panel">
                          <div class="tab_panel_content">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="tab_image"><img src="../../assets/tab.jpg" alt=""></div>
                              </div>
                              <div class="col-lg-6">
                                <div class="tab_text">
                                  <p>Integer vel ex massa. Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt. Nullam libero velit, imperdiet quis mauris eget, accumsan elementum leo. Nullam eu massa accumsan, porta lectus qu</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab_panel">
                          <div class="tab_panel_content">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="tab_image"><img src="../../assets/tab.jpg" alt=""></div>
                              </div>
                              <div class="col-lg-6">
                                <div class="tab_text">
                                  <p>Integer vel ex massa. Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt. Nullam libero velit, imperdiet quis mauris eget, accumsan elementum leo. Nullam eu massa accumsan, porta lectus qu</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="tab_panel active">
                          <div class="tab_panel_content">
                            <div class="row">
                              <div class="col-lg-6">
                                <div class="tab_image"><img src="../../assets/tab.jpg" alt=""></div>
                              </div>
                              <div class="col-lg-6">
                                <div class="tab_text">
                                  <p>Integer vel ex massa. Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt. Nullam libero velit, imperdiet quis mauris eget, accumsan elementum leo. Nullam eu massa accumsan, porta lectus qu</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="elements_milestones">
              <div class="elements_title">Milestones</div>
              <div class="milestones">
                <div class="row milestones_container">

                  <!-- Milestone -->
                  <div class="col-lg-4 milestone_col">
                    <div class="milestone d-flex flex-row align-items-start justify-content-start">
                      <div class="milestone_counter" data-end-value="35">0</div>
                      <div class="milestone_content">
                        <div class="milestone_text">Amazing Speakers</div>
                        <div class="milestone_sub">Top of the top</div>
                      </div>
                    </div>
                  </div>

                  <!-- Milestone -->
                  <div class="col-lg-4 milestone_col">
                    <div class="milestone d-flex flex-row align-items-start justify-content-start">
                      <div class="milestone_counter" data-end-value="12" data-sign-after="k">0</div>
                      <div class="milestone_content">
                        <div class="milestone_text">People Joined</div>
                        <div class="milestone_sub">Business people</div>
                      </div>
                    </div>
                  </div>

                  <!-- Milestone -->
                  <div class="col-lg-4 milestone_col">
                    <div class="milestone d-flex flex-row align-items-start justify-content-start">
                      <div class="milestone_counter" data-end-value="17">0</div>
                      <div class="milestone_content">
                        <div class="milestone_text">Successful Events</div>
                        <div class="milestone_sub">In a year</div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Loaders -->
            <div class="elements_loaders">
              <div class="elements_title">Loaders</div>
              <div class="loaders_container">
                <div class="row elements_loaders_container">
                  <div class="col-lg-3 loader_col">
                    <!-- Loader -->
                    <div class="circle loader" data-value="1.0">
                      <strong><i></i></strong>
                      <span>Commitment</span>
                    </div>
                  </div>
                  <div class="col-lg-3 loader_col">
                    <!-- Loader -->
                    <div class="circle loader" data-value="0.95">
                      <strong><i></i></strong>
                      <span>Hard Work</span>
                    </div>
                  </div>
                  <div class="col-lg-3 loader_col">
                    <div class="circle loader" data-value="0.70">
                      <strong><i></i></strong>
                      <span>Marketing</span>
                    </div>
                  </div>
                  <div class="col-lg-3 loader_col">
                    <div class="circle loader" data-value="0.65">
                      <strong><i></i></strong>
                      <span>Determination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Icon Boxes -->

            <div class="elements_icon_boxes">
              <div class="elements_title">Icon Boxes</div>
              <div class="icon_boxes_container">
                <div class="row">

                  <!-- Icon Box -->
                  <div class="col-lg-4 icon_box_col">
                    <div class="icon_box">
                      <div class="icon_box_num">01.</div>
                      <div class="icon_box_title">Amazing Speakers</div>
                      <div class="icon_box_subtitle">Top of the top</div>
                      <div class="icon_box_text">
                        <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per.</p>
                      </div>
                    </div>
                  </div>

                  <!-- Icon Box -->
                  <div class="col-lg-4 icon_box_col">
                    <div class="icon_box">
                      <div class="icon_box_num">02.</div>
                      <div class="icon_box_title">Useful Information</div>
                      <div class="icon_box_subtitle">Top of the top</div>
                      <div class="icon_box_text">
                        <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per.</p>
                      </div>
                    </div>
                  </div>

                  <!-- Icon Box -->
                  <div class="col-lg-4 icon_box_col">
                    <div class="icon_box">
                      <div class="icon_box_num">03.</div>
                      <div class="icon_box_title">Professional Help</div>
                      <div class="icon_box_subtitle">Top of the top</div>
                      <div class="icon_box_text">
                        <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Elements"
    }
</script>

<style scoped>
  @import "../../style/home.css";
  @import "../../../static/css/elements.css";
  @import "../../../static/css/events_responsive.css";
</style>
