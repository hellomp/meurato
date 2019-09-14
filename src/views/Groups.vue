<template>
  <div>
    <header>
      <div class="back-button" @click="backPage()">
        <svg height="1.3rem" role="img" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </div>
      <h2 class="page-title">Grupos</h2>
    </header>
    <div class="menu">
      <div class="menu-item" :class="group.name" v-for="group in groups" v-bind:key="group.id" @click="openGroup(group.id, $route.params.destiny)">
        <div class="menu-label">
          {{group.name}}-{{group.number}}
        </div>
      </div>
    </div>
    <button v-if="$route.params.destiny == 'group'" class="create-button" @click="openNewGroup()">Novo Grupo</button>
  </div>
</template>

<script>
import {db} from '@/main'

export default {
  name: 'groups',
  data(){
    return{
      groups: []
    }
  },
  methods: {
    openGroup(id, destiny){
      this.$router.push({name: destiny, params:{id}})
    },
    openNewGroup(){
      this.$router.push({name: 'newGroup'})
    },
    backPage(){
      this.$router.push('/')
    },
    getGroups(){
      db.collection("groups").get().then((querySnapshot) => {
        let groups=[]
        querySnapshot.forEach(doc => {
          groups.push({id: doc.id, name: doc.data().name, number: doc.data().number})
        })
        this.groups = groups
        console.log(groups)
      })
    }
  },
  created(){
    this.getGroups()
    console.log(this.$route.params.destiny)
  }
}
</script>

<style>

</style>