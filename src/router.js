import Vue from 'vue'
import Router from 'vue-router'
import MainMenu from './views/MainMenu.vue'
import Weight from './views/Weight.vue'
import Groups from './views/Groups.vue'
import Group from './views/Group.vue'
import NewGroup from './views/NewGroup.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main-menu',
      component: MainMenu
    },
    {
      path: '/weight/:id',
      name: 'weight',
      component: Weight
    },
    {
      path: '/groups/:destiny',
      name: 'groups',
      component: Groups
    },
    {
      path: '/group/:id',
      name: 'group',
      component: Group
    },
    {
      path: '/newGroup',
      name: 'newGroup',
      component: NewGroup
    }
  ]
})
