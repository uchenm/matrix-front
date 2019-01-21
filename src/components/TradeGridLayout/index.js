/*
 * @Author: XueYu 😊
 * @Date: 2019-01-14 17:41:19
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-21 19:06:00
 */
import React, { PureComponent } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import Card from '../Card'
import Order from './Order'
import RecentTrade from './RecentTrade'
import DepthChart from '../DepthChart'
import BasicOrdersAndPositions from './BasicOrdersAndPositions'
import TradingView from './TradingView'

const ResponsiveGridLayout = WidthProvider(Responsive);
/* 基础布局 */
const m_basic = {
  "lg": [
    {"w":3,"h":4,"x":0,"y":0,"i":"orderBook","moved":false,"static":false},
    {"w":6,"h":3,"x":3,"y":0,"i":"tradingView","moved":false,"static":false},
    {"w":6,"h":1,"x":3,"y":3,"i":"depthChart","minW":2,"minH":1,"moved":false,"static":false},
    {"w":3,"h":4,"x":9,"y":0,"i":"recentTradeList","minW":2,"minH":1,"moved":false,"static":false},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions","minW":2,"minH":1,"moved":false,"static":false}
  ],
  "md":[
    {"w":4,"h":4,"x":0,"y":0,"i":"orderBook","minW":4,"minH":1,"moved":false,"static":false},
    {"w":4,"h":3,"x":4,"y":0,"i":"tradingView","minW":2,"minH":1,"moved":false,"static":false},
    {"w":4,"h":1,"x":4,"y":3,"i":"depthChart","minW":2,"minH":1,"moved":false,"static":false},
    {"w":4,"h":4,"x":8,"y":0,"i":"recentTradeList","minW":2,"minH":1,"moved":false,"static":false},
    {"w":12,"h":1,"x":0,"y":4,"i":"basicOrdersAndPositions","minW":7,"minH":1,"moved":false,"static":false}
  ],
}
const originalLayouts = getFromLS("layouts") || m_basic
/* 取本地布局 */
function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}
/* 存布局到本地 */
function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
/* 仓位标签配置 */
const tabList = [
  {key: 'positions', tab: '仓位'},
  {key: 'close', tab: '已平仓位'},
  {key: 'active', tab: '活动委托'},
  {key: 'stops', tab: '止损委托'},
  {key: 'fills', tab: '已成交'},
  {key: 'order', tab: '委托历史'},
]

class TradeGridLayout extends PureComponent {
  state = {
    layouts: JSON.parse(JSON.stringify(originalLayouts)),
    isFullscreen: false,
    fullscreenCard: '',
    closeList: [],
    showList: ['orderBook','tradingView','depthChart','recentTradeList','basicOrdersAndPositions',],
    activeTabKey: 'positions',
    toolbox: { lg: [] },
  }
  /* 卡片列表配置 */
  CARD_LIST_CONFIG = {
    orderBook: {
      key: 'orderBook',
      title: '委托交易',
      extra: ['setting', 'close', 'fullscreen'],
      children: <Order/>
    },
    tradingView: {
      key: 'tradingView',
      title: '图表',
      extra: ['close', 'fullscreen'],
      children: <TradingView/>
    },
    depthChart: {
      key: 'depthChart',
      title: '深度图',
      extra: ['close', 'fullscreen'],
      children: <DepthChart/>
    },
    recentTradeList: {
      key: 'recentTradeList',
      title: '近期交易',
      extra: ['close', 'fullscreen'],
      children: <RecentTrade/>
    },
    basicOrdersAndPositions: {
      key: 'basicOrdersAndPositions',
      extra: ['close', 'fullscreen'],
      children: <BasicOrdersAndPositions activeTabKey={this.state.activeTabKey}/>,
      tabList,
      defaultActiveTabKey: 'positions',
      onTabChange: this.onTabChange,
      id: 'basicOrdersAndPositions',
    },
  }
  /* 渲染卡片 */
  renderCardList = (key) => {
    const { isFullscreen } = this.state
    const {children, ...props} = this.CARD_LIST_CONFIG[key]
    return (
      <Card {...props} isFullscreen={isFullscreen}
        clickFullScreen={() => this.clickFullScreen(key)} clickClose={() => this.clickClose(key)}>
        {children}
      </Card>
    )
  }
  /* 布局变化回调 */
  onLayoutChange = (layout, layouts) => {
    console.log('onLayoutChange!', layouts)
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }
  /* 点击全屏 */
  clickFullScreen = ItemName => {
    const { isFullscreen } = this.state
    this.setState({
      isFullscreen: !isFullscreen,
      fullscreenCard: ItemName
    })
  }
  /* 点击关闭 */
  clickClose = ItemName => {
    console.log('clickClose ItemName',ItemName)
    const { closeList, showList } = this.state
    let currentShow = Array.from(showList)
    let currentClose = Array.from(closeList)
    const i = currentShow.indexOf(ItemName)
    if (i !== -1) {
      currentShow.splice(i, 1)
      currentClose.push(ItemName)
      this.setState({
        closeList: currentClose,
        showList: currentShow
      })
    }
  }
  /* 仓位标签切换 */
  onTabChange = key => {
    console.log('onTabChange key',key)
    this.setState({ activeTabKey: key })
  }
  /* 响应式布局变化 */
  onBreakpointChange = breakpoint => {
    console.log('breakpoint',breakpoint)
    this.setState(prevState => ({
      currentBreakpoint: breakpoint,
      toolbox: {
        ...prevState.toolbox,
        [breakpoint]:
          prevState.toolbox[breakpoint] ||
          prevState.toolbox[prevState.currentBreakpoint] ||
          []
      }
    }));
  }

  render(){
    const { isFullscreen, fullscreenCard, showList } = this.state
    console.log('showList',showList)
    if (!isFullscreen) {
      return (
        <ResponsiveGridLayout
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 12, sm: 6, xs: 4, xxs: 2}}
          layouts={this.state.layouts}
          draggableCancel='.noDrag'
          measureBeforeMount={true}
          onBreakpointChange={this.onBreakpointChange}
          // useCSSTransforms={false}
          // containerPadding={[10,0]}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }>
          {
            showList.map(item => <div key={item}>{this.renderCardList(item)}</div>)
          }
        </ResponsiveGridLayout>
      )
    } else if (isFullscreen) {
      return (this.renderCardList(fullscreenCard))
    }
  }
}

export default TradeGridLayout