<template>
  <div id="app1">
    <router-view></router-view>
     <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
    
    
  </div>
</template>
<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  components: { 
    FooterGuide 
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0
}
#app{
  width: 100%;
  height: 100%;
  background: #f5f5f5
}

</style>
