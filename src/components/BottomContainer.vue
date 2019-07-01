<template>
  <!-- Call to action -->

  <div class="cta">
    <div class="parallax_background parallax-window" data-parallax="scroll"
         :style="{ background: 'url(' + require('../assets/cta_1.jpg')+')'}"
         data-speed="0.8"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="cta_content text-center">
            <div class="cta_title">Get your tickets now!</div>
            <div class="button cta_button"><a href="#">Find out more</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BottomContainer"
    }
</script>

<style scoped>

</style>
