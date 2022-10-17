export default {
   async contactCoach(context, payload) {
      const newRequest = {
         // id: new Date().toISOString(),  //dummy id
         userEmail: payload.email,
         message: payload.message,
      };
      const response = await fetch(`https://coach-app-41a35-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
         method: 'POST', //firebase automatycznie generuje ID
         body: JSON.stringify(newRequest)
      }); //requests to nowy node w bazie

      const responseData = await response.json();   //dlatego czekamy na dodane przez FB ID

      if (!response.ok) {
         const error = new Error(responseData.message || 'Failed to send request.');
         throw error;
      }

      newRequest.id = responseData.name; //new property do powyzszego newRequest
      newRequest.coachId = payload.coachId; //local data, not send to base

      context.commit('addRequest', newRequest); //request name
   },
   async fetchRequests(context) {
      const coachId = context.rootGetters.userId; //global state
      const response = await fetch(`https://coach-app-41a35-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
      const responseData = await response.json();

      if (!response.ok) {
         const error = new Error(responseData.message || 'Failed to fetch request.');
         throw error;
      }
      console.log(responseData)
      const requests = [];
      for (const key in responseData) {
         const request = {
            id: key,
            coachId: coachId,
            userEmail: responseData[key].userEmail,
            message: responseData[key].message,
         };
         requests.push(request);

      }
      context.commit('setRequests', requests);
   }
}