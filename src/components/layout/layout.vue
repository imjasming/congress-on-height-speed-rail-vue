<template>
  <div class="super_container">
    <!-- Header and Menu -->
    <page-header></page-header>
    <router-view></router-view>
    <bottom-container></bottom-container>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from '@/components/PageHeader'
  import PageFooter from '../PageFooter'
  import BottomContainer from '../BottomContainer'

  export default {
    name: "layout",
    components: {
      PageHeader,
      PageFooter,
      BottomContainer
    }
  }
</script>

<style scoped>

</style>
