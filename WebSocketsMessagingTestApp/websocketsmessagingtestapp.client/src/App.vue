<script setup lang="ts">

</script>
  
<template>
  <nav>
    <ul>
      <li><router-link :to="{name:'Home'}">Home</router-link></li>
      <li><router-link :to="{name:'About'}">About</router-link></li>
    </ul>
  </nav>

  <router-view/>

</template>

<style>
</style>