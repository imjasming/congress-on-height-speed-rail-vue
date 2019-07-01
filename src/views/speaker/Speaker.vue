<template>
  <div class="super_container">
    <!-- Home -->

    <div class="home">
      <!-- <div class="home_background" style="background-img: url(../../assets/index.jpg)"></div> -->
      <div class="parallax_background parallax-window" data-parallax="scroll" :style="{ background: 'url(' + require('../../assets/speakers.jpg')+')'}" data-speed="0.8"></div>
      <div class="home_content_container">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_content d-flex flex-row align-items-end justify-content-start">
                <div class="current_page">Speakers</div>
                <div class="breadcrumbs ml-auto">
                  <ul>
                    <li><a href="/home">Home</a></li>
                    <li>Speakers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Speakers -->

    <div class="speakers">
      <div class="container reset_container">

        <!-- Speaker -->
        <div class="row row-lg-eq-height">
          <div class="col-lg-6 speaker_col reset_col">
            <div class="speaker_image" :style="{ backgroundImage: 'url(' + require('../../assets/speaker_1.jpg')+')'}"></div>
          </div>
          <div class="col-lg-6">
            <div class="speaker_content d-flex flex-column align-items-start justify-content-center">
              <div class="speaker_title">William Smith</div>
              <div class="speaker_subtitle">Marketing Specialist</div>
              <div class="speaker_text">
                <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.</p>
              </div>
              <div class="button speaker_button"><a href="#">Buy Tickets Now!</a></div>
            </div>
          </div>
        </div>

        <!-- Speaker -->
        <div class="row row-lg-eq-height">
          <div class="col-lg-6 order-lg-1 order-2">
            <div class="speaker_content d-flex flex-column align-items-start justify-content-center">
              <div class="speaker_title">Lidia Maria Parker</div>
              <div class="speaker_subtitle">Marketing Specialist</div>
              <div class="speaker_text">
                <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.</p>
              </div>
              <div class="button speaker_button"><a href="#">Buy Tickets Now!</a></div>
            </div>
          </div>
          <div class="col-lg-6 speaker_col reset_col order-lg-2 order-1">
            <div class="speaker_image" :style="{ backgroundImage: 'url(' + require('../../assets/speaker_2.jpg')+')'}"></div>
          </div>
        </div>

        <!-- Speaker -->
        <div class="row row-lg-eq-height">
          <div class="col-lg-6 speaker_col reset_col">
            <div class="speaker_image" :style="{ backgroundImage: 'url(' + require('../../assets/speaker_3.jpg')+')'}"></div>
          </div>
          <div class="col-lg-6">
            <div class="speaker_content d-flex flex-column align-items-start justify-content-center">
              <div class="speaker_title">James Morrison</div>
              <div class="speaker_subtitle">Marketing Specialist</div>
              <div class="speaker_text">
                <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.</p>
              </div>
              <div class="button speaker_button"><a href="#">Buy Tickets Now!</a></div>
            </div>
          </div>
        </div>

        <!-- Speaker -->
        <div class="row row-lg-eq-height">
          <div class="col-lg-6 order-lg-1 order-2">
            <div class="speaker_content d-flex flex-column align-items-start justify-content-center">
              <div class="speaker_title">Patricia Freeman</div>
              <div class="speaker_subtitle">Marketing Specialist</div>
              <div class="speaker_text">
                <p>Donec quis metus ac arcu luctus accumsan. Nunc in justo tincidunt, sodales nunc id, finibus nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh, sed faucibus nisi tortor sed ante.</p>
              </div>
              <div class="button speaker_button"><a href="#">Buy Tickets Now!</a></div>
            </div>
          </div>
          <div class="col-lg-6 speaker_col reset_col order-lg-2 order-1">
            <div class="speaker_image" :style="{ backgroundImage: 'url(' + require('../../assets/speaker_4.jpg')+')'}"></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Speaker"
    }
</script>

<style scoped>
  @import "../../style/home.css";
@import "../../../static/css/speakers.css";
@import "../../../static/css/speakers_responsive.css";
</style>
