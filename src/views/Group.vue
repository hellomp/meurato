<template>
  <div>
    <header>
      <div class="back-button" @click="backPage()"><svg height="1.5rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
      <h2 class="page-title">{{group.name}} - {{group.quant}} animais</h2>
    </header>
    <div class="container">
      <v-calendar is-expanded :attributes='attrs'/>
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
              {{rat.weight.day1}}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day2}}
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
import addDays from 'date-fns/addDays'

export default {
  name: 'group',
  data(){
    return{
      group: {},
      rats: [],
      attrs:[
        {
          highlight: true,
          dates: null,
          popover:{
            label: 'Nascimento',
            hideIndicator: true
          }
        },
        {
          highlight: 'green',
          dates: null,
          popover:{
            label: 'Desmame',
            hideIndicator: true
          }
        },
        {
          highlight: 'red',
          dates: null,
          popover:{
            label: 'Coleta',
            hideIndicator: true
          }
        }
      ]
    }
  },
  methods:{
    backPage(){
      this.$router.push({name: 'groups', params: {destiny: 'group'}})
    },
    getGroups(){
      db.collection("groups").doc(this.$route.params.id).get().then((doc) => {
        if (doc.exists) {
          this.group = doc.data()
          const attrs = this.attrs.slice()
          attrs[0].dates = this.group.birthDate
          attrs[1].dates = addDays(this.group.birthDate, 2)
          attrs[2].dates = addDays(this.group.birthDate, 3)
          this.attrs = attrs
          this.getRats()
        } else {
            console.log("No such document!");
        }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      })
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
    }
  },
  watch:{
    group:{
      handler(){
        const attrs = this.attrs.slice()
        attrs[0].dates = this.group.birthDate.toDate()
        attrs[1].dates = addDays(this.group.birthDate.toDate(), 2)
        attrs[2].dates = addDays(this.group.birthDate.toDate(), 3)
        this.attrs = attrs
      },
      deep: true
    }
  },
  created(){
    this.getGroups()
  }
}
</script>

<style>

</style>