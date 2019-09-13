<template>
  <div>
    <header>
      <div class="back-button" @click="backPage()"><svg height="1.5rem" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>
      <h2 class="page-title">Novo grupo</h2>
    </header>
    <div class="container">
      <div class="input-container">
        <input type="text" placeholder="Nome" v-model="name">
        <input type="number" placeholder="Nº de ratos" v-model="quant">
        <v-date-picker v-model="birthDate" :input-props='{placeholder:"Data do nascimento"}'/>
        <button @click="saveGroup">Salvar</button>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '@/main'
import addDays from 'date-fns/addDays'

export default {
  name: 'newgroup',
  data(){
    return{
      name: '',
      quant: '',
      birthDate: new Date(),
      attrs:[
        {
          highlight: true,
          dates: new Date(),
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
  watch:{
    birthDate(){
      const attrs = this.attrs.slice()
      attrs[0].dates = this.birthDate
      attrs[1].dates = addDays(this.birthDate, 2)
      attrs[2].dates = addDays(this.birthDate, 3)
      this.attrs = attrs
    }
  },
  methods:{
    backPage(){
      this.$router.push({name: 'groups', params: {destiny: 'group'}})
    },
    saveGroup(){
      let vm = this
      db.collection('groups').add({
        name: this.name,
        quant: this.quant,
        birthDate: this.birthDate
      })
      .then((docRef) => {
        console.log("Group created")
        vm.createRats(docRef.id)
      })
      .catch((error) => {
        console.error("Error creating group: ", error);
      })
    },
    createRats(groupId){
      for (let i = 0; i < this.quant; i++) {
        db.collection('rats').add({
          ratNumber: i + 1,
          groupId: groupId,
          weight: {
            day1: "",
            day2: "",
            day3: "",
            day4: "",
            day5: ""
          }
        })
        .then(() => {
          console.log("Rat created");
        })
        .catch((error) => {
          console.error("Error creating rat: ", error);
        })
      }
      this.$router.push({name: 'groups', params: {destiny: 'group'}})
    }
  }
}
</script>

<style>

</style>