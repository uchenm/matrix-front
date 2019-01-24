/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 10:33:32
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 13:40:51
 */
export default [
  {
    path: 'user',
    component: '../layouts/UserLayout/index',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  {
    path: '/',
    component: '../layouts/BasicLayout/index',
    Routes: ['src/pages/index'],
    routes: [
      //trade
      { path: '/', redirect: '/trade/XBTUSD' },
      {
        path: '/trade',
        name: 'trade',
        routes: [
          {
            path: '/trade/:symbol',
            component: './trade/index',
          },
        ]
      },
    ],
  },
]