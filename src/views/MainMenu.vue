<template>
  <div>
   <header>
      <h2 class="page-title">Menu</h2>
    </header>
    <div class="menu">
      <div class="menu-item" @click="openItem('weight')">
        <img src="../assets/Weight.svg" alt="">
        <div class="menu-label">Peso</div>
      </div>
      <div class="menu-item" @click="openItem('group')">
        <img src="../assets/Rat.svg" alt="">
        <div class="menu-label">Grupos</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-menu',
  methods: {
    openItem(destiny){
      this.$router.push({name: 'groups', params: {destiny}})
    }
  }
}
</script>

<style>

</style>