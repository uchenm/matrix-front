/*
 * @Author: XueYu 😊
 * @Date: 2019-01-23 14:10:33
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 17:19:04
 */

export const LAYOUT_NAME = {
  orderBook: '委托列表',
  tradingView: '价格图表',
  depthChart: '深度图',
  recentTradeList: '近期交易',
  basicOrdersAndPositions: '仓位和未结委托',
}
export const BASIC_TOOL = [
  { key: 'orderBook', name: '委托列表' },
  { key: 'tradingView', name: '价格图表' },
  { key: 'depthChart', name: '深度图' },
  { key: 'recentTradeList', name: '近期交易' },
  { key: 'basicOrdersAndPositions', name: '仓位和未结委托' },
]
/* 基础布局 */
export const BASIC = {
  lg: [
    {"w":3,"h":4,"x":0,"y":0,"i":"orderBook"},
    {"w":6,"h":3,"x":3,"y":0,"i":"tradingView",},
    {"w":6,"h":1,"x":3,"y":3,"i":"depthChart","minW":2,"minH":1,},
    {"w":3,"h":4,"x":9,"y":0,"i":"recentTradeList","minW":2,"minH":1,},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions","minW":2,"minH":1,}
  ],
  md:[
    {"w":4,"h":4,"x":0,"y":0,"i":"orderBook","minW":4,"minH":1,},
    {"w":4,"h":3,"x":4,"y":0,"i":"tradingView","minW":2,"minH":1,},
    {"w":4,"h":1,"x":4,"y":3,"i":"depthChart","minW":2,"minH":1,},
    {"w":4,"h":4,"x":8,"y":0,"i":"recentTradeList","minW":2,"minH":1,},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions","minW":7,"minH":1,}
  ],
  sm: [
    {"w":4,"h":4,"x":0,"y":0,"i":"orderBook"},
    {"w":5,"h":3,"x":4,"y":1,"i":"tradingView",},
    {"w":5,"h":1,"x":4,"y":0,"i":"depthChart"},
    {"w":3,"h":4,"x":9,"y":0,"i":"recentTradeList"},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions"}
  ],
  xs: [
    {"w":6,"h":4,"x":0,"y":0,"i":"orderBook"},
    {"w":12,"h":3,"x":0,"y":5,"i":"tradingView",},
    {"w":12,"h":1,"x":0,"y":8,"i":"depthChart"},
    {"w":6,"h":4,"x":6,"y":0,"i":"recentTradeList"},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions"}
  ],
}
/* 高级布局 */
export const HIGH = {
  lg: [
    {"w":3,"h":4,"x":0,"y":0,"i":"orderBook"},
    {"w":6,"h":3,"x":3,"y":0,"i":"tradingView",},
    {"w":6,"h":1,"x":3,"y":3,"i":"depthChart","minW":2,"minH":1,},
    {"w":3,"h":4,"x":9,"y":0,"i":"recentTradeList","minW":2,"minH":1,},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions","minW":2,"minH":1,},
    {"w":12,"h":1,"x":0,"y":4,"i":"marginDisplay","minW":2,"minH":1,},
  ],
  md:[
    {"w":4,"h":4,"x":0,"y":0,"i":"orderBook","minW":4,"minH":1,},
    {"w":4,"h":3,"x":4,"y":0,"i":"tradingView","minW":2,"minH":1,},
    {"w":4,"h":1,"x":4,"y":3,"i":"depthChart","minW":2,"minH":1,},
    {"w":4,"h":4,"x":8,"y":0,"i":"recentTradeList","minW":2,"minH":1,},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions","minW":7,"minH":1,}
  ],
  sm: [
    {"w":4,"h":4,"x":0,"y":0,"i":"orderBook"},
    {"w":5,"h":3,"x":4,"y":1,"i":"tradingView",},
    {"w":5,"h":1,"x":4,"y":0,"i":"depthChart"},
    {"w":3,"h":4,"x":9,"y":0,"i":"recentTradeList"},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions"}
  ],
  xs: [
    {"w":6,"h":4,"x":0,"y":0,"i":"orderBook"},
    {"w":12,"h":3,"x":0,"y":5,"i":"tradingView",},
    {"w":12,"h":1,"x":0,"y":8,"i":"depthChart"},
    {"w":6,"h":4,"x":6,"y":0,"i":"recentTradeList"},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions"}
  ],
}