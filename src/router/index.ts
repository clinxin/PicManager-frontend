import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import UserLoginPage from '@/pages/user/UserLoginPage.vue'
import UserRegisterPage from '@/pages/user/UserRegisterPage.vue'
import UserManagePage from '@/pages/admin/UserManagePage.vue'
import AddPicturePage from '@/pages/AddPicturePage.vue'
import PictureManagePage from '@/pages/admin/PictureManagePage.vue'
import PictureDetailPage from '@/pages/PictureDetailPage.vue'
import AddPictureBatchPage from '@/pages/AddPictureBatchPage.vue'
import SpaceManagePage from '@/pages/admin/SpaceManagePage.vue'
import AddSpacePage from '@/pages/AddSpacePage.vue'
import MySpacePage from '@/pages/MySpacePage.vue'
import SpaceDetailPage from '@/pages/SpaceDetailPage.vue'
import SearchPicturePage from '@/pages/SearchPicturePage.vue'
import SpaceAnalyzePage from '@/pages/SpaceAnalyzePage.vue'
import SpaceUserManagePage from '@/pages/admin/SpaceUserManagePage.vue'

// @author clinxin <a href="http://localhost:8888">图管家</a>
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 默认主页打开的时候，加载所有的次界面
    {
      path: '/',
      name: 'home',
      component: HomePage,
      // component: HomeView,
    },
    {
      path: '/user/login',
      name: '用户登录',
      component: UserLoginPage,
    },
    {
      path: '/user/register',
      name: '用户注册',
      component: UserRegisterPage,
    },
    {
      path: '/admin/userManage',
      name: '用户管理',
      component: UserManagePage,
    },
    {
      path: '/admin/pictureManage',
      name: '图片管理',
      component: PictureManagePage,
    },
    {
      path: '/admin/spaceManage',
      name: '空间管理',
      component: SpaceManagePage,
    },
    {
      path: '/spaceUserManage/:id',
      name: '空间成员管理',
      component: SpaceUserManagePage,
      props: true,
    },
    {
      path: '/add_picture',
      name: '创建图片',
      component: AddPicturePage,
    },
    {
      path: '/add_picture/batch',
      name: '批量创建图片',
      component: AddPictureBatchPage,
    },
    {
      path: '/picture/:id',
      name: '图片详情',
      component: PictureDetailPage,
      props: true,
    },
    {
      path: '/add_space',
      name: '创建空间',
      component: AddSpacePage,
    },
    {
      path: '/my_space',
      name: '我的空间',
      component: MySpacePage,
    },
    {
      path: '/space/:id',
      name: '空间详情',
      component: SpaceDetailPage,
      props: true,
    },
    {
      path: '/space_analyze',
      name: '空间分析',
      component: SpaceAnalyzePage,
    },
    {
      path: '/search_picture',
      name: '图片搜索',
      component: SearchPicturePage,
    }
    // 懒加载，默认主页打开的时候不加载，在打开的时候才会加载
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
