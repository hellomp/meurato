<template>
  <div>
    <header>
      <div class="back-button" @click="backPage()">
        <svg height="1.3rem" role="img" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </div>
      <h2 class="page-title">Novo grupo</h2>
    </header>
    <div class="container">
      <div class="input-container">
        <div class="input-wrapper">
          <select id="name" v-model="name">
            <option value="BPA1" selected>BPA1</option>
            <option value="BPA2">BPA2</option>
            <option value="BPA+Se1">BPA+Se1</option>
            <option value="BPA+Se2">BPA+Se2</option>
            <option value="OM">OM</option>
            <option value="CT">CT</option>
            <option value="Se">Se</option>
          </select>
          <label for="name">Nome</label>
        </div>
        <div class="input-wrapper">
          <input id="groupNumber" type="number" placeholder=" " v-model.number="number" required>
          <label for="groupNumber">Nº do grupo</label>
        </div>
        <div class="input-wrapper">
          <input id="quant" type="number" placeholder=" " v-model.number="quant">
          <label for="quant">Nº de ratos</label>
        </div>
        <div class="input-wrapper">
          <v-date-picker id="birthDate" v-model="birthDate" :input-props='{placeholder:"Data do nascimento"}'/>
          <label for="birthDate">Data de nascimento</label>
        </div>
        <button @click="saveGroup">SALVAR</button>
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
      name: 'BPA1',
      quant: '',
      number: '',
      birthDate: new Date()
    }
  },
  methods:{
    backPage(){
      this.$router.push({name: 'groups', params: {destiny: 'group'}})
    },
    saveGroup(){
      if(this.name !== "" && this.number !== "" && this.birthDate !== ""){
        let vm = this
        db.collection('groups').add({
          name: this.name,
          number: this.number,
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
      }
    },
    createRats(groupId){
      for (let i = 0; i < this.quant; i++) {
        db.collection('rats').add({
          ratNumber: i + 1,
          groupId: groupId,
          weight: {
            day1: '',
            day2: '',
            day3: '',
            day4: '',
            day5: '',
            day6: '',
            day7: '',
            day8: '',
            day9: '',
            day10: '',
            day11: '',
            day12: '',
            day13: '',
            day14: '',
            day15: '',
            day16: '',
            day17: '',
            day18: '',
            day19: '',
            day20: '',
            day21: '',
            day22: '',
            day23: '',
            day24: '',
            day25: '',
            day26: '',
            day27: '',
            day28: '',
            day29: '',
            day30: ''   
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