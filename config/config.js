/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 10:32:40
 * @Last Modified by:   XueYu 😊
 * @Last Modified time: 2019-01-24 10:32:40
 */
import routesConfig from './routes.config'
export default {
  treeShaking: true,
  plugins: [
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'MatrixExchange',
      dll: true,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  routes: routesConfig,
}