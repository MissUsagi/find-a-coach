<template>
<div>
 <section>FILTER</section>
 <section>
    <base-card>
    <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
    </div>
    <ul v-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName" :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
        <!-- <li v-for="coach in filteredCoaches" :key="coach.id">{{ coach.firstName }}</li> -->
        </ul>
              <h3 v-else>No coaches found.</h3>
                  </base-card>
        </section>
 </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
export default {
  components: { CoachItem, BaseButton },
    computed: {
        filteredCoaches() {
            return this.$store.getters['coaches/coaches']; //1st is namespace 2nd is getter
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>



<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}

/* body {
    padding: 2rem;
    font-family: 'Just Another Hand', cursive;
    background: #f3f3f3;
}

div {
      margin-top: 3rem;
}

.sketchy {
    padding: 4rem 8rem;
    display: inline-block;
    border: 3px solid #333333;
    font-size: 2.5rem;
    border-radius: 2% 6% 5% 4% / 1% 1% 2% 4%;
    text-transform: uppercase;
    letter-spacing: 0.3ch;
    background: #ffffff;
    position: relative;

}
    .sketchy::before {
        content: '';
        border: 2px solid #353535;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0) scale(1.015) rotate(0.5deg);
        border-radius: 1% 1% 2% 4% / 2% 6% 5% 4%;
    } */
</style>