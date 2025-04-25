import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../components/TodoList.vue'
import TodoDetails from '../components/TodoDetails.vue'
import NotFound from '../pages/NotFound.vue'
import ErrorTest from '../pages/ErrorTest.vue'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/todo/:id',
    name: 'TodoDetails',
    component: TodoDetails,
    props: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/error',
    name: 'ErrorTest',
    component: ErrorTest
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router