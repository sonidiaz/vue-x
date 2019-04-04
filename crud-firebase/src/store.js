import Vue from 'vue'
import Vuex from 'vuex'
import db from './firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tareas:[]
  },
  mutations: {
    setTareas(state, tareas){
        state.tareas = tareas
    }
  },
  actions: {
    getTareas({commit}){
      const tareas = [];
      db.collection("todo")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                const tarea = doc.data();
                tareas.push(tarea);
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
        commit('setTareas', tareas)
    }
  }
})
