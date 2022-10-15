export default {
   registerCoach(context, data) {
      const coachData = {
         id: context.rootGetters.userId, //bierze ID z index.js, tam jest getter
         firstName: data.first,
         lastName: data.last,
         description: data.desc,
         hourlyRate: data.rate,
         areas: data.areas
      };
      context.commit('registerCoach', coachData);
   }
}