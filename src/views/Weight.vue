<template>
  <div>
    <header>
      <div class="back-button" @click="backPage()">
        <svg height="1.3rem" role="img" viewBox="0 0 320 512"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
      </div>
      <h2 class="page-title">{{group.name}}</h2>
    </header>
    <div class="container">
      <div class="table-container-scroll">
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
                <input type="number" v-model.number="rat.weight.day1" @change="updateWeight(rat.id, 'day1', rat.weight.day1)">
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day2" @change="updateWeight(rat.id, 'day2', rat.weight.day2)">
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day3" @change="updateWeight(rat.id, 'day3', rat.weight.day3)">
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day4" @change="updateWeight(rat.id, 'day4', rat.weight.day4)">
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day5" @change="updateWeight(rat.id, 'day5', rat.weight.day5)">
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day6" @change="updateWeight(rat.id, 'day6', rat.weight.day6)">
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day7" @change="updateWeight(rat.id, 'day7', rat.weight.day7)">
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day8" @change="updateWeight(rat.id, 'day8', rat.weight.day8)">
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day9" @change="updateWeight(rat.id, 'day9', rat.weight.day9)">
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day10" @change="updateWeight(rat.id, 'day10', rat.weight.day10)">
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day11" @change="updateWeight(rat.id, 'day11', rat.weight.day11)">
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day12" @change="updateWeight(rat.id, 'day12', rat.weight.day12)">
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day13" @change="updateWeight(rat.id, 'day13', rat.weight.day13)">
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day14" @change="updateWeight(rat.id, 'day14', rat.weight.day14)">
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day15" @change="updateWeight(rat.id, 'day15', rat.weight.day15)">
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day16" @change="updateWeight(rat.id, 'day16', rat.weight.day16)">
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day17" @change="updateWeight(rat.id, 'day17', rat.weight.day17)">
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day18" @change="updateWeight(rat.id, 'day18', rat.weight.day18)">
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day19" @change="updateWeight(rat.id, 'day19', rat.weight.day19)">
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day20" @change="updateWeight(rat.id, 'day20', rat.weight.day20)">
              </td>
            </tr>
            <tr>
              <td>21</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day21" @change="updateWeight(rat.id, 'day21', rat.weight.day21)">
              </td>
            </tr>
            <tr>
              <td>22</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day22" @change="updateWeight(rat.id, 'day22', rat.weight.day22)">
              </td>
            </tr>
            <tr>
              <td>23</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day23" @change="updateWeight(rat.id, 'day23', rat.weight.day23)">
              </td>
            </tr>
            <tr>
              <td>24</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day24" @change="updateWeight(rat.id, 'day24', rat.weight.day24)">
              </td>
            </tr>
            <tr>
              <td>25</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day25" @change="updateWeight(rat.id, 'day25', rat.weight.day25)">
              </td>
            </tr>
            <tr>
              <td>26</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day26" @change="updateWeight(rat.id, 'day26', rat.weight.day26)">
              </td>
            </tr>
            <tr>
              <td>27</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day27" @change="updateWeight(rat.id, 'day27', rat.weight.day27)">
              </td>
            </tr>
            <tr>
              <td>28</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day28" @change="updateWeight(rat.id, 'day28', rat.weight.day28)">
              </td>
            </tr>
            <tr>
              <td>29</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day29" @change="updateWeight(rat.id, 'day29', rat.weight.day29)">
              </td>
            </tr>
            <tr>
              <td>30</td>
              <td>02/10</td>
              <td v-for="rat in rats" v-bind:key="rat.id">
                <input type="number" v-model.number="rat.weight.day30" @change="updateWeight(rat.id, 'day30', rat.weight.day30)">
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