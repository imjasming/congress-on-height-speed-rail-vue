<template>
  <div class="super_container">

    <!-- Home -->

    <div class="home">
      <div class="parallax_background parallax-window" data-parallax="scroll" :style="{ background: 'url(' + require('../../assets/events.jpg')+')'}" data-speed="0.8"></div>
      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content d-flex flex-row align-items-end justify-content-start">
                <div class="current_page">Events</div>
                <div class="breadcrumbs ml-auto">
                  <ul>
                    <li><a href="/home">Home</a></li>
                    <li>Events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Events -->

    <div class="events">
      <div class="container">
        <div class="row">
          <div class="col">

            <!-- Event -->
            <div class="event">
              <div class="row row-lg-eq-height">
                <div class="col-lg-6 event_col">
                  <div class="event_image_container">
                    <div class="background_image" :style="{ background: 'url(' + require('../../assets/event_9.jpg')+')'}"></div>
                    <div class="date_container">
                      <a href="#">
											<span class="date_content d-flex flex-column align-items-center justify-content-center">
												<div class="date_day">15</div>
												<div class="date_month">May</div>
											</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 event_col">
                  <div class="event_content">
                    <div class="event_title">Marketing Sollutions in 2018</div>
                    <div class="event_location">@ Miami Auditorium</div>
                    <div class="event_text">
                      <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                    </div>
                    <div class="event_speakers">
                      <!-- Event Speaker -->
                      <div class="event_speaker d-flex flex-row align-items-center justify-content-start">
                        <div><div class="event_speaker_image"><img src="../../assets/event_speaker_1.jpg" alt=""></div></div>
                        <div class="event_speaker_content">
                          <div class="event_speaker_name">Michael Smith</div>
                          <div class="event_speaker_title">Marketing Specialist</div>
                        </div>
                      </div>
                      <!-- Event Speaker -->
                      <div class="event_speaker d-flex flex-row align-items-center justify-content-start">
                        <div><div class="event_speaker_image"><img src="../../assets/event_speaker_2.jpg" alt=""></div></div>
                        <div class="event_speaker_content">
                          <div class="event_speaker_name">Jessica Williams</div>
                          <div class="event_speaker_title">Marketing Specialist</div>
                        </div>
                      </div>
                    </div>
                    <div class="event_buttons">
                      <div class="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div>
                      <div class="button_2 event_button event_button_2"><a href="#">Read more</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Event -->
            <div class="event">
              <div class="row row-lg-eq-height">
                <div class="col-lg-6 event_col">
                  <div class="event_image_container">
                    <div class="background_image" :style="{ background: 'url(' + require('../../assets/event_10.jpg')+')'}"></div>
                    <div class="date_container">
                      <a href="#">
											<span class="date_content d-flex flex-column align-items-center justify-content-center">
												<div class="date_day">15</div>
												<div class="date_month">May</div>
											</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 event_col">
                  <div class="event_content">
                    <div class="event_title">Blockchain technology</div>
                    <div class="event_location">@ Miami Auditorium</div>
                    <div class="event_text">
                      <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                    </div>
                    <div class="event_speakers">
                      <!-- Event Speaker -->
                      <div class="event_speaker d-flex flex-row align-items-center justify-content-start">
                        <div><div class="event_speaker_image"><img src="../../assets/event_speaker_1.jpg" alt=""></div></div>
                        <div class="event_speaker_content">
                          <div class="event_speaker_name">Michael Smith</div>
                          <div class="event_speaker_title">Marketing Specialist</div>
                        </div>
                      </div>
                      <!-- Event Speaker -->
                      <div class="event_speaker d-flex flex-row align-items-center justify-content-start">
                        <div><div class="event_speaker_image"><img src="../../assets/event_speaker_2.jpg" alt=""></div></div>
                        <div class="event_speaker_content">
                          <div class="event_speaker_name">Jessica Williams</div>
                          <div class="event_speaker_title">Marketing Specialist</div>
                        </div>
                      </div>
                    </div>
                    <div class="event_buttons">
                      <div class="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div>
                      <div class="button_2 event_button event_button_2"><a href="#">Read more</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Event -->
            <div class="event">
              <div class="row row-lg-eq-height">
                <div class="col-lg-6 event_col">
                  <div class="event_image_container">
                    <div class="background_image" :style="{ background: 'url(' + require('../../assets/event_11.jpg')+')'}"></div>
                    <div class="date_container">
                      <a href="#">
											<span class="date_content d-flex flex-column align-items-center justify-content-center">
												<div class="date_day">15</div>
												<div class="date_month">May</div>
											</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 event_col">
                  <div class="event_content">
                    <div class="event_title">Internet of things</div>
                    <div class="event_location">@ Miami Auditorium</div>
                    <div class="event_text">
                      <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accu msan molestie. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                    </div>
                    <div class="event_speakers">
                      <!-- Event Speaker -->
                      <div class="event_speaker d-flex flex-row align-items-center justify-content-start">
                        <div><div class="event_speaker_image"><img src="../../assets/event_speaker_1.jpg" alt=""></div></div>
                        <div class="event_speaker_content">
                          <div class="event_speaker_name">Michael Smith</div>
                          <div class="event_speaker_title">Marketing Specialist</div>
                        </div>
                      </div>
                      <!-- Event Speaker -->
                      <div class="event_speaker d-flex flex-row align-items-center justify-content-start">
                        <div><div class="event_speaker_image"><img src="../../assets/event_speaker_2.jpg" alt=""></div></div>
                        <div class="event_speaker_content">
                          <div class="event_speaker_name">Jessica Williams</div>
                          <div class="event_speaker_title">Marketing Specialist</div>
                        </div>
                      </div>
                    </div>
                    <div class="event_buttons">
                      <div class="button event_button event_button_1"><a href="#">Buy Tickets Now!</a></div>
                      <div class="button_2 event_button event_button_2"><a href="#">Read more</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="pagination">
              <ul>
                <li class="active"><a href="#">01.</a></li>
                <li><a href="#">02.</a></li>
                <li><a href="#">03.</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import url1 from "../../assets/event_9.jpg"
  export default {
    name: "event",
    data() {
      return{
        imgUrl:url1
      }
    }
  }
</script>

<style scoped>
  @import "../../style/home.css";
  @import "../../../static/css/events.css";
  @import "../../../static/css/events_responsive.css";
</style>
