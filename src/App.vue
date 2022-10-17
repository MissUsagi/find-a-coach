<template>
<the-header></the-header>
<router-view v-slot="slotProps">
  <transition name="route" mode="out-in"> 
    <!-- //first animate removal of existing page || TRANSITION wymaga tylko 1 child element-->
    <component :is="slotProps.Component"></component>
  </transition>
</router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default ({
components: {
  TheHeader
}
})
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Secular+One&display=swap');

:root {
  --primary-color: #6f2dbd;
  --primary-dark: rgb(33, 25, 80);
  --primary-light: #b298dc;
  --secondary-color: #b9faf6;
  --secondary-dark: #5bc0be;
  --pink: #f391e3;
  --pink-pastel: #d9b3ca;
}


* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.route-enter-from{
  opacity: 0;
  transform: translateY(-30px);
}
.route-leave-to{  opacity: 0;
  transform: translateY(30px);}
.route-enter-active{
  transition: all 0.3s ease-out;
}
.route-leave-active{
  transition: all 0.3s ease-in;
}
.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0)
}
</style>
