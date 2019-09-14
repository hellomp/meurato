<template>
  <div>
    <header>
      <div class="back-button" @click="backPage()">
        <svg height="1.3rem" role="img" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </div>
      <h2 class="page-title">{{group.name}}-{{group.number}} - {{group.quant}} animais</h2>
    </header>
    <div class="container">
      <h3 class="page-label">Calendário</h3>
      <v-calendar is-expanded :attributes='attrs' class="custom-calendar"/>
      <h3 class="page-label">Pesos</h3>
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
          <tr>
            <td>3</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day3}}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day4}}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day5}}
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day6}}
            </td>
          </tr>
          <tr>
            <td>7</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day7}}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day8}}
            </td>
          </tr>
          <tr>
            <td>9</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day9}}
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day10}}
            </td>
          </tr>
          <tr>
            <td>11</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day11}}
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day12}}
            </td>
          </tr>
          <tr>
            <td>13</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day13}}
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day14}}
            </td>
          </tr>
          <tr>
            <td>15</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day15}}
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day16}}
            </td>
          </tr>
          <tr>
            <td>17</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day17}}
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day18}}
            </td>
          </tr>
          <tr>
            <td>19</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day19}}
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day20}}
            </td>
          </tr>
          <tr>
            <td>21</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day21}}
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day22}}
            </td>
          </tr>
          <tr>
            <td>23</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day23}}
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day24}}
            </td>
          </tr>
          <tr>
            <td>25</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day25}}
            </td>
          </tr>
          <tr>
            <td>26</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day27}}
            </td>
          </tr>
          <tr>
            <td>28</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day28}}
            </td>
          </tr>
          <tr>
            <td>29</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day29}}
            </td>
          </tr>
          <tr>
            <td>30</td>
            <td>02/10</td>
            <td v-for="rat in rats" v-bind:key="rat.id">
              {{rat.weight.day30}}
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
          highlight: 'yellow',
          dates: null,
          popover:{
            label: 'Desmame',
            hideIndicator: true
          }
        },
        {
          highlight: 'green',
          dates: {},
          popover:{
            label: 'Aplicação',
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
          attrs[0].dates = this.group.birthDate.toDate()
          // Dia do desmame
          attrs[1].dates = addDays(this.group.birthDate.toDate(), 21)
          // Dias de aplicação
          attrs[2].dates.start = addDays(this.group.birthDate.toDate(), 22)
          attrs[2].dates.end = addDays(this.group.birthDate.toDate(), 52)
          // Dia da coleta
          attrs[3].dates = addDays(this.group.birthDate.toDate(), 53)
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
        // Dia do desmame
        attrs[1].dates = addDays(this.group.birthDate.toDate(), 21)
        // Dias de aplicação
        attrs[2].dates.start = addDays(this.group.birthDate.toDate(), 22)
        attrs[2].dates.end = addDays(this.group.birthDate.toDate(), 52)
        // Dia da coleta
        attrs[3].dates = addDays(this.group.birthDate.toDate(), 53)
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