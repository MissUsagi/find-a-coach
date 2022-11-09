<template>
<div>
<base-dialog :show="!!error" title="An error occured!" @close="handleError"><p>{{error}}</p></base-dialog> 
<!-- !!error converts truthy string value into real boolean value -->
<div>
 <coach-filter @change-filter="setFilters" ></coach-filter> <!-- event z coachfilter --> 
 <section>
    <base-card>
    <div class="controls">
        <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
        <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login</base-button>
        <base-button v-if="toggleRegisterButton" link to="/register">Register as Coach</base-button>
    </div>
    <div v-if="isLoading">
        <base-spinner></base-spinner>
    </div>
    <ul v-else-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :id="coach.id" :first-name="coach.firstName" :last-name="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
        <!-- Dane ze store/index.js -->
        <!-- <li v-for="coach in filteredCoaches" :key="coach.id">{{ coach.firstName }}</li> -->
        </ul>
              <h3 v-else>No coaches found.</h3>
                  </base-card>
        </section>
 </div>
</div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue'
import BaseDialog from '../../components/ui/BaseDialog.vue';

export default {
  components: { CoachItem, BaseButton, CoachFilter, BaseDialog },
  data(){
    return {
        isLoading: false,
        error: null,
        activeFilters: {
            frontend: true,
            backend: true,
            cereer: true
        }
    }
  },
    computed: {
      isLoggedIn() {
        return this.$store.getters.isAuthenticated;
      },
      toggleRegisterButton(){
        return this.isLoggedIn && !this.isCoach && !this.isLoading;
      },
        isCoach(){
                return this.$store.getters['coaches/isCoach'];
        },     
        filteredCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter(coach => {
                if(this.activeFilters.frontend && coach.areas.includes('frontend')){
                    return true;
                }
                  if(this.activeFilters.backend && coach.areas.includes('backend')){
                    return true;
                }
                  if(this.activeFilters.career && coach.areas.includes('career')){
                    return true;
                }
                return false;
            }) //1st is namespace 2nd is getter
        },
        hasCoaches() {
            return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
        }
    },
  created() {
    this.loadCoaches(); //bez argumentu -> refresh false by default
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
   async loadCoaches(refresh = false) {
        this.isLoading = true;
        try{
          await this.$store.dispatch('coaches/loadCoaches', {forceRefresh: refresh }); //payloa - forceRefresh
        } catch(error){
            this.error = error.message || 'Something went wrong!';
        }
        // const myTimeout = setTimeout(()=> {
        this.isLoading = false;
    // }, 500);
    },
      handleError(){
    this.error = null;
  },
  },
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