<template>
<the-header></the-header>
<router-view></router-view>
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
</style>
