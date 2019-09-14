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
  background: #F6F6F6;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
    background-image: linear-gradient(-20deg, #4481eb 0%, #04befe 100%);
    box-shadow: 0 6px 15px rgba(36,37,38,0.08);
    transition: box-shadow 0.25s ease;
    border-radius: 1rem;
    padding: 1rem 0 1rem 0;
    cursor: pointer;
    img{
      width: 70%;
      padding: 0.5rem 0 1rem 0;
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
.container{
  .custom-calendar{
    border-width: 0 !important;
    border-radius: 1rem !important;
    box-shadow: 0 3px 6px rgba(36,37,38,0.08);
    margin-bottom: 1rem;
  }
}
.table-container{
  background: #FFFFFF;
  box-shadow: 0 3px 6px rgba(36,37,38,0.08);
  border-radius: 1rem;
  overflow-x: auto;
}
.input-container{
  display: flex;
  flex-direction: column;
  .input-wrapper{
    padding: 12px 16px 0px 16px;
    margin-bottom: 1rem;
    border: none;
    background: #FFFFFF;
    box-shadow: 0 3px 6px rgba(36,37,38,0.08);
    transition: box-shadow 0.25s ease;
    border-radius: 1rem;
    //display: inline-block;
    position: relative;

    input, select {
      height: 48px;
      outline: none;
      border: none;
      //display: block;
      line-height: 1.2em;
      font-size: 1rem;
      width: 100%;
      padding: 0;
      box-shadow: none;
      color: #989898;
      transition: all .2s ease-out;
      -webkit-transition: all .2s ease-out;
      -moz-transition: all .2s ease-out;
      -webkit-appearance:none;
    }
    input::placeholder{
      color:transparent;
    }
    label {
      //display: block;
      font-size: 1rem;
      color: #989898;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      margin-top: 24px;
      margin-left: 1rem;
      transition: all .2s ease-out;
      -webkit-transition: all .2s ease-out;
      -moz-transition: all .2s ease-out;
    }
    input:focus + label, 
    input:not(:placeholder-shown) + label, 
    select:focus + label,
    select:valid + label,
    span + label{
      font-size: 0.8rem;
      color: #4481eb;
      margin-top: 8px;
    }
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
    background-image: linear-gradient(-20deg, #4481eb 0%, #04befe 100%);
    box-shadow: 0 3px 6px rgba(36,37,38,0.08);
    transition: box-shadow 0.25s ease;
    height: 52px;
    border-radius: 1rem;
  }
  .input-wrapper:hover, button:hover{
    box-shadow: 2px 8px 12px rgba(36,37,38,0.13);
  }
}
table{
  border-collapse: collapse;
  font-size: 1rem;
  text-align: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    svg{
      fill: #989898;
      transition: fill 0.2s ease;
    }
    svg:hover{
      fill: #2c3e50;
    }
  }
  .page-title{
    padding-left: 1rem;
  }
}
.create-button{
  cursor: pointer;
  padding: 0.8rem 1rem;
  background-image: linear-gradient(120deg, #00c6fb 0%, #005bea 100%);    
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 2rem;
  background-image: linear-gradient(-20deg, #4481eb 0%, #04befe 100%);
  box-shadow: 0 6px 15px rgba(36,37,38,0.08);
  transition: box-shadow 0.25s ease;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
}
.menu-item:hover, .create-button:hover{
  box-shadow: 5px 12px 20px rgba(36,37,38,0.13);
}

</style>
