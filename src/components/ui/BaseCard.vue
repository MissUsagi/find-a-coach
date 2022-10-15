<template>
   <div class="card">
      <slot></slot>
   </div>
</template>

<style scoped>
.card {
   border-radius: 12px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
   outline: rgba(14, 91, 207, 0.2) solid 3px;
   padding: 1rem;
   margin: 2rem auto;
   max-width: 40rem;
}
</style>