<template>
  <div>
    <header>
      <div class="back-button" @click="backPage()">
        <svg height="1.3rem" role="img" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </div>
      <h2 class="page-title">{{group.name}}</h2>
    </header>
    <div class="container">
      <div class="table-container">
        <table>
          <thead>
            <th></th>
            <th>Data</th>
            <th v-for="rat in rats" v-bind:key="rat.id">{{rat.ratNumber}}</th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model="rat.weight.day1" @change="updateWeight(rat.id, 'day1', rat.weight.day1)">
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model="rat.weight.day2" @change="updateWeight(rat.id, 'day2', rat.weight.day2)">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '@/main'

export default {
  name: 'weight',
  data(){
    return{
      rats: [],
      group: {}
    }
  },
  created(){
    this.getRats()
  },
  methods:{
    backPage(){
      this.$router.push({name: 'groups', params: {destiny: 'weight'}})
    },
    updateWeight(ratId, day, ratWeight){
      let weightDay = 'weight.' + day
      db.collection("rats").doc(ratId).update({
          [weightDay] : ratWeight
      })
      console.log(ratId)
    },
    getRats(){
      db.collection("rats").where("groupId", "==", this.$route.params.id).orderBy("ratNumber").get()
      .then((querySnapshot) => {
        let rats = []
        querySnapshot.forEach(function(doc) {
          rats.push({
            id: doc.id,
            ratNumber: doc.data().ratNumber,
            weight: doc.data().weight
          })
        })
        this.rats = rats
        console.log(rats)
      })
      this.getGroups()
    },
    getGroups(){
      db.collection("groups").doc(this.$route.params.id).get()
      .then((doc) => {
        this.group = doc.data()
      })
      .catch(function(error) {
          console.log("Error getting group: ", error)
      }) 
    }
  }
}
</script>

<style>

</style>