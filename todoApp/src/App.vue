<template>
  <div id="app">
    <div id="nav">
      <Navbar/>
    </div>
    <div class="container-is-fluid">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
