/*
 * @Author: XueYu 😊
 * @Date: 2019-01-14 17:41:19
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-18 17:13:23
 */
import React, { PureComponent } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import Card from '../Card'
import Order from './Order'
import RecentTrade from './RecentTrade'
import DepthChart from '../DepthChart'
import BasicOrdersAndPositions from './BasicOrdersAndPositions'
import BasicOrdersHeader from './BasicOrdersAndPositions/Header'
import styles from './index.less'

const ResponsiveGridLayout = WidthProvider(Responsive);
/* const advanced = {
  "lg":[
    {"w":5,"h":12,"x":0,"y":0,"i":"orderBook","minW":2,"moved":false,"static":false},
    {"w":3,"h":6,"x":5,"y":8,"i":"depthChart","moved":false,"static":false},
    {"w":4,"h":8,"x":5,"y":0,"i":"tradingView","moved":false,"static":false},
    {"w":3,"h":9,"x":0,"y":12,"i":"recentTradeList","moved":false,"static":false},
    {"w":9,"h":6,"x":0,"y":21,"i":"openOrders","moved":false,"static":false},
    {"w":9,"h":5,"x":0,"y":27,"i":"positionsList","moved":false,"static":false},
    {"w":3,"h":5,"x":8,"y":8,"i":"marginDisplay","moved":false,"static":false},
    {"w":12,"h":5,"x":0,"y":32,"i":"instrumentsList","moved":false,"static":false}
  ],
  "md":[
    {"w":4,"h":6,"x":0,"y":0,"i":"orderBook","minW":2,"moved":false,"static":false},
    {"w":5,"h":4,"x":3,"y":23,"i":"depthChart","moved":false,"static":false},
    {"w":8,"h":8,"x":0,"y":15,"i":"tradingView","moved":false,"static":false},
    {"w":4,"h":6,"x":4,"y":0,"i":"recentTradeList","moved":false,"static":false},
    {"w":8,"h":4,"x":0,"y":6,"i":"openOrders","moved":false,"static":false},
    {"w":8,"h":5,"x":0,"y":10,"i":"positionsList","moved":false,"static":false},
    {"w":3,"h":4,"x":0,"y":23,"i":"marginDisplay","moved":false,"static":false},
    {"w":8,"h":5,"x":0,"y":27,"i":"instrumentsList","moved":false,"static":false}
  ],
  "sm":[
    {"w":2,"h":6,"x":0,"y":0,"i":"orderBook","minW":2,"moved":false,"static":false},
    {"w":4,"h":4,"x":0,"y":28,"i":"depthChart","moved":false,"static":false},
    {"w":4,"h":8,"x":0,"y":20,"i":"tradingView","moved":false,"static":false},
    {"w":2,"h":6,"x":2,"y":0,"i":"recentTradeList","moved":false,"static":false},
    {"w":4,"h":4,"x":0,"y":6,"i":"openOrders","moved":false,"static":false},
    {"w":4,"h":5,"x":0,"y":10,"i":"positionsList","moved":false,"static":false},
    {"w":4,"h":5,"x":0,"y":15,"i":"marginDisplay","moved":false,"static":false},
    {"w":4,"h":5,"x":0,"y":32,"i":"instrumentsList","moved":false,"static":false}
  ],
  "xs":[
    {"w":2,"h":8,"x":0,"y":0,"i":"orderControls","moved":false,"static":false},
    {"w":2,"h":6,"x":0,"y":8,"i":"orderBook","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":14,"i":"recentTradeList","moved":false,"static":false},
    {"w":2,"h":4,"x":0,"y":19,"i":"openOrders","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":23,"i":"positionsList","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":28,"i":"marginDisplay","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":33,"i":"tradingView","moved":false,"static":false},
    {"w":2,"h":4,"x":0,"y":41,"i":"depthChart","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":45,"i":"instrumentsList","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":50,"i":"chatWidget","moved":false,"static":false}
  ],
  "xxs":[
    {"w":2,"h":8,"x":0,"y":0,"i":"orderControls","moved":false,"static":false},
    {"w":2,"h":6,"x":0,"y":8,"i":"orderBook","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":14,"i":"recentTradeList","moved":false,"static":false},
    {"w":2,"h":4,"x":0,"y":19,"i":"openOrders","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":23,"i":"positionsList","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":28,"i":"marginDisplay","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":33,"i":"instrumentsList","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":38,"i":"tradingView","moved":false,"static":false},
    {"w":2,"h":4,"x":0,"y":46,"i":"depthChart","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":50,"i":"chatWidget","moved":false,"static":false}
  ]
}
const basic = {
  "lg":[
    {"w":4,"h":12,"x":0,"y":0,"i":"orderBook","minW":2,"moved":false,"static":false},
    {"w":5,"h":4,"x":4,"y":8,"i":"depthChart","moved":false,"static":false},
    {"w":5,"h":8,"x":4,"y":0,"i":"tradingView","moved":false,"static":false},
    {"w":3,"h":12,"x":9,"y":0,"i":"recentTradeList","moved":false,"static":false},
    {"w":12,"h":5,"x":0,"y":12,"i":"basicOrdersAndPositions","moved":false,"static":false}
  ],
  "md":[
    {"w":4,"h":6,"x":0,"y":0,"i":"orderBook","minW":2,"moved":false,"static":false},
    {"w":4,"h":6,"x":4,"y":0,"i":"recentTradeList","moved":false,"static":false},
    {"w":8,"h":5,"x":0,"y":6,"i":"basicOrdersAndPositions","moved":false,"static":false},
    {"w":8,"h":8,"x":0,"y":11,"i":"tradingView","moved":false,"static":false},
    {"w":8,"h":4,"x":0,"y":19,"i":"depthChart","moved":false,"static":false}
  ],
  "sm":[
    {"w":2,"h":6,"x":0,"y":0,"i":"orderBook","minW":2,"moved":false,"static":false},
    {"w":2,"h":6,"x":2,"y":0,"i":"recentTradeList","moved":false,"static":false},
    {"w":4,"h":5,"x":0,"y":6,"i":"basicOrdersAndPositions","moved":false,"static":false},
    {"w":4,"h":8,"x":0,"y":11,"i":"tradingView","moved":false,"static":false},
    {"w":4,"h":4,"x":0,"y":19,"i":"depthChart","moved":false,"static":false}
  ],
  "xs":[
    {"w":2,"h":8,"x":0,"y":0,"i":"orderControls","moved":false,"static":false},
    {"w":2,"h":6,"x":0,"y":8,"i":"orderBook","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":14,"i":"recentTradeList","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":19,"i":"basicOrdersAndPositions","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":24,"i":"chatWidget","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":32,"i":"tradingView","moved":false,"static":false},
    {"w":2,"h":4,"x":0,"y":40,"i":"depthChart","moved":false,"static":false}
  ],
  "xxs":[
    {"w":2,"h":8,"x":0,"y":0,"i":"orderControls","moved":false,"static":false},
    {"w":2,"h":6,"x":0,"y":8,"i":"orderBook","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":14,"i":"recentTradeList","moved":false,"static":false},
    {"w":2,"h":5,"x":0,"y":19,"i":"basicOrdersAndPositions","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":24,"i":"chatWidget","moved":false,"static":false},
    {"w":2,"h":8,"x":0,"y":32,"i":"tradingView","moved":false,"static":false},
    {"w":2,"h":4,"x":0,"y":40,"i":"depthChart","moved":false,"static":false}
  ]
} */
const m_basic = {
  "lg": [
    {"w":2,"h":1,"x":0,"y":0,"i":"orderBook","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":2,"y":0,"i":"tradingView","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":4,"y":0,"i":"depthChart","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":6,"y":0,"i":"recentTradeList","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":8,"y":0,"i":"basicOrdersAndPositions","minW":2,"minH":1,"moved":false,"static":false}
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

const tabList = [
  {key: 'positions', tab: '仓位'},
  {key: 'close', tab: '已平仓位'},
  {key: 'active', tab: '活动委托'},
  {key: 'stops', tab: '止损委托'},
  {key: 'fills', tab: '已成交'},
  {key: 'order', tab: '委托历史'},
]

const renderCardList = (isFullscreen, clickFullScreen, clickClose, onTabChange, activeTabKey) => {
  return {
    orderBook: (
      <Card
        title='委托交易'
        isFullscreen={isFullscreen}
        extra={['setting', 'close', 'fullscreen']}
        clickFullScreen={() => clickFullScreen('orderBook')}
        clickClose={() => clickClose('orderBook')}>
        <Order/>
      </Card>
    ),
    tradingView: (
      <Card title='图表' extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('tradingView')} clickClose={() => clickClose('tradingView')}>
        tradingView
      </Card>
    ),
    depthChart: (
      <Card title='深度图' extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('depthChart')} clickClose={() => clickClose('depthChart')}>
        <DepthChart/>
      </Card>
    ),
    recentTradeList: (
      <Card title='近期交易' extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('recentTradeList')} clickClose={() => clickClose('recentTradeList')}>
        <RecentTrade/>
      </Card>
    ),
    basicOrdersAndPositions: (
      <Card
        id='basicOrdersAndPositions' tabList={tabList}
        onTabChange={onTabChange}
        defaultActiveTabKey='positions'
        extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('basicOrdersAndPositions')} clickClose={() => clickClose('basicOrdersAndPositions')}>
        <BasicOrdersAndPositions activeTabKey={activeTabKey}/>
      </Card>
    )
  }
}


class TradeGridLayout extends PureComponent {
  state = {
    layouts: JSON.parse(JSON.stringify(originalLayouts)),
    isFullscreen: false,
    fullscreenCard: '',
    closeList: [],
    activeTabKey: 'positions',
  }

  onLayoutChange = (layout, layouts) => {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }
  clickFullScreen = ItemName => {
    const { isFullscreen } = this.state
    this.setState({
      isFullscreen: !isFullscreen,
      fullscreenCard: ItemName
    })
  }
  clickClose = ItemName => {
    const { closeList } = this.state
    let currentList = Array.from(closeList)
    if (ItemName && !currentList.includes(ItemName)) {
      currentList.push(ItemName)
      this.setState({
        closeList: currentList
      })
    }
  }
  renderGridItems = () => {
    const { isFullscreen, closeList, activeTabKey } = this.state
    let gridItems = [
      {
        key: 'orderBook',
        content: (
          <div key="orderBook" >
            {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['orderBook']}
          </div>
        )
      },
      {
        key: 'tradingView',
        content: (
          <div key="tradingView" >
          {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['tradingView']}
        </div>
        )
      },
      {
        key: 'depthChart',
        content: (
          <div key="depthChart" >
          {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['depthChart']}
        </div>
        )
      },
      {
        key: 'recentTradeList',
        content: (
          <div key="recentTradeList" >
            {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['recentTradeList']}
          </div>
        )
      },
      {
        key: 'basicOrdersAndPositions',
        content: (
          <div key="basicOrdersAndPositions" >
            {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose, this.onTabChange, activeTabKey)['basicOrdersAndPositions']}
          </div>
        )
      },
    ]
    return gridItems.filter(item => !closeList.includes(item.key)).map(item => item.content)
  }
  onTabChange = (key) => {
    console.log('onTabChange key',key)
    this.setState({ activeTabKey: key })
  }

  render(){
    const { isFullscreen, fullscreenCard } = this.state
    if (!isFullscreen) {
      return (
        <ResponsiveGridLayout
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 12, sm: 6, xs: 4, xxs: 2}}
          layouts={this.state.layouts}
          draggableCancel='.noDrag'
          measureBeforeMount={true}
          // useCSSTransforms={false}
          // containerPadding={[10,0]}
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }>
          { this.renderGridItems() }

        </ResponsiveGridLayout>
      )
    } else if (isFullscreen) {
      return (renderCardList(isFullscreen, this.clickFullScreen)[fullscreenCard])
    }

  }
}

export default TradeGridLayout