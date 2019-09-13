<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
	line-height: 1;
  background: #F6F7F9;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  .menu-item{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #1A73E8;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
    border-radius: 1rem;
    padding: 1rem 0 1rem 0;
    cursor: pointer;
    img{
      width: 70%;
      padding: 1rem 0 1rem 0;
    }
    .menu-label{
      color: #FFFFFF;
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
}
.menu, .container{
  padding: 0 1rem;
  margin-top: 60px;
}
.table-container{
  background: #FFFFFF;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  border-radius: 1rem;
  overflow-x: auto;
}
.input-container{
  display: flex;
  flex-direction: column;
  input, select{
    padding-right: 16px;
    padding-left: 16px;
    margin-bottom: 1rem;
    font-size: 1rem;
    border: none;
    background: #FFFFFF;
    height: 52px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
    border-radius: 1rem;
  }
  button{
    cursor: pointer;
    padding-right: 16px;
    padding-left: 16px;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    color: #FFFFFF;
    background: #1A73E8;
    height: 52px;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
    border-radius: 1rem;
  }
}
table{
  border-collapse: collapse;
  font-size: 1rem;
  display: inline-table;
  width: 100%;
  th{
    padding-right: 16px;
    padding-left: 16px;
    height: 42px;
  }
  tr{
    height: 52px;
    border-top-color: rgba(0,0,0,.12);
    border-top-width: 1px;
    border-top-style: solid;
  }
  td{
    border-right-color: rgba(0,0,0,.12);
    border-right-width: 1px;
    border-right-style: solid;
    input{
      width: 32px;
      padding-right: 16px;
      padding-left: 16px;
      text-align: center;
      font-size: 1rem;
      border: none;
      background: none;
      height: 52px;
    }
  }
  td:last-child{
    border-right: none;
  }
}
header{
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  .back-button{
    height: 28px;
    width: 28px;
    border-radius: 50%;
    cursor: pointer;
  }
  .page-title{
    padding-left: 1rem;
  }
}
.create-button{
  padding: 0.8rem 1rem;
  background: #1A73E8;
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2rem;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.vc-container{
  border-width: 0 !important;
  border-radius: 1rem !important;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
  margin-bottom: 1rem;
}
</style>
