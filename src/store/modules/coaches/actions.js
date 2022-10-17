export default {
   async registerCoach(context, data) {
      const userId = context.rootGetters.userId; //bierze ID z index.js, tam jest getter
      const coachData = {
         firstName: data.first,
         lastName: data.last,
         description: data.desc,
         hourlyRate: data.rate,
         areas: data.areas
      };

      const response = await fetch(`https://coach-app-41a35-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {  //json na końcu jest wymagany przez firebase //by default GET request
         method: 'PUT', //overwrite lub created
         body: JSON.stringify(coachData), //object into json
      });
      // const responseData = await response.json(); //wykona sie tylko jak await odpowie

      if (!response.ok) {
         // const error = new Error(responseData.message || 'Failed to Fetch!');
         // throw error;
      }

      context.commit('registerCoach', {
         ...coachData,
         id: userId
      });
   },
   async loadCoaches(context, payload) {  // payload tak jakby nadpiszę ten getter poniżej i wymusi przeładowanie
      if (!payload.forceRefresh && !context.getters.shouldUpdate) {  //jak fałsz to przerwie dalszy kod 
         return;
      }
      const response = await fetch(
         `https://coach-app-41a35-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
      );
      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(responseData.message || 'Failed to Fetch!');
         throw error;
      }

      const coaches = [];

      for (const key in responseData) {
         const coach = {
            id: key,
            firstName: responseData[key].firstName,
            lastName: responseData[key].lastName,
            description: responseData[key].description,
            hourlyRate: responseData[key].hourlyRate,
            areas: responseData[key].areas
         };
         coaches.push(coach);
      }

      context.commit('setCoaches', coaches);
      context.commit('setFetchTimestamp'); //mutation
      console.log(coaches)
   }
}