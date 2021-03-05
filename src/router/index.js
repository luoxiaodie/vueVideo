import Vue from 'vue'
import Router from 'vue-router'
import VideoPlayer from '@/components/VideoPlayer'
import VideoPlayerPannel from '@/components/VideoPlayerPannel'
import VideoPlayerBackPannel from '@/components/VideoPlayerBackPannel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: {
        template: '<router-view></router-view>'
      },
      redirect:'VideoPlayer',
      children:[
        {
          path: 'VideoPlayer',
          name: 'VideoPlayer',
          component: VideoPlayer
        },
        {
          path: 'VideoPlayerPannel',
          name: 'VideoPlayerPannel',
          component: VideoPlayerPannel
        },
        {
          path: 'VideoPlayerBackPannel',
          name: 'VideoPlayerBackPannel',
          component: VideoPlayerBackPannel
        }
      ]
    },
  ]
})
