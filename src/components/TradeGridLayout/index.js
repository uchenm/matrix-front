/*
 * @Author: XueYu 😊
 * @Date: 2019-01-14 17:41:19
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-15 20:09:27
 */
import React, { PureComponent } from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import Card from '../Card'
// import styles from './index.less'

const ResponsiveGridLayout = WidthProvider(Responsive);
const originalLayouts = getFromLS("layouts") || {
  "lg": [
    {"w":2,"h":1,"x":0,"y":0,"i":"order","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":2,"y":0,"i":"tv","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":4,"y":0,"i":"deep","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":6,"y":0,"i":"recent","minW":2,"minH":1,"moved":false,"static":false},
    {"w":2,"h":1,"x":8,"y":0,"i":"tabtable","minW":2,"minH":1,"moved":false,"static":false}
  ],
  "md":[
    {"w":4,"h":4,"x":0,"y":0,"i":"order","minW":2,"minH":1,"moved":false,"static":false},
    {"w":5,"h":3,"x":4,"y":0,"i":"tv","minW":2,"minH":1,"moved":false,"static":false},
    {"w":5,"h":1,"x":4,"y":3,"i":"deep","minW":2,"minH":1,"moved":false,"static":false},
    {"w":3,"h":4,"x":9,"y":0,"i":"recent","minW":2,"minH":1,"moved":false,"static":false},
    {"w":12,"h":1,"x":0,"y":4,"i":"tabtable","minW":2,"minH":1,"moved":false,"static":false}
  ]
}

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

const renderCardList = (isFullscreen, clickFullScreen, clickClose) => {
  return {
    order: (
      <Card
        title='委托交易'
        isFullscreen={isFullscreen}
        extra={['setting', 'close', 'fullscreen']}
        clickFullScreen={() => clickFullScreen('order')}
        clickClose={() => clickClose('order')}>
        委托交易
      </Card>
    ),
    tv: (
      <Card title='图表' extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('tv')} clickClose={() => clickClose('tv')}>
        图表
      </Card>
    ),
    deep: (
      <Card title='深度图' extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('deep')} clickClose={() => clickClose('deep')}>
        深度图
      </Card>
    ),
    recent: (
      <Card title='近期交易' extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('recent')} clickClose={() => clickClose('recent')}>
        近期交易
      </Card>
    ),
    tabtable: (
      <Card title='仓位' extra={['close', 'fullscreen']} isFullscreen={isFullscreen}
        clickFullScreen={() => clickFullScreen('tabtable')} clickClose={() => clickClose('tabtable')}>
        仓位
      </Card>
    )
  }
}


class TradeGridLayout extends PureComponent {
  state = {
    layouts: JSON.parse(JSON.stringify(originalLayouts)),
    isFullscreen: false,
    fullscreenCard: '',
    closeList: []
  }

  onLayoutChange = (layout, layouts) => {
    console.log('onLayoutChange !')
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }
  clickFullScreen = ItemName => {
    const { isFullscreen } = this.state
    console.log('ItemName',ItemName)
    this.setState({
      isFullscreen: !isFullscreen,
      fullscreenCard: ItemName
    })
  }
  clickClose = ItemName => {
    console.log('ItemName',ItemName)
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
    const { isFullscreen, closeList } = this.state
    let gridItems = [
      {
        key: 'order',
        content: (
          <div key="order" >
            {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['order']}
          </div>
        )
      },
      {
        key: 'tv',
        content: (
          <div key="tv" >
          {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['tv']}
        </div>
        )
      },
      {
        key: 'deep',
        content: (
          <div key="deep" >
          {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['deep']}
        </div>
        )
      },
      {
        key: 'recent',
        content: (
          <div key="recent" >
            {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['recent']}
          </div>
        )
      },
      {
        key: 'tabtable',
        content: (
          <div key="tabtable" >
            {renderCardList(isFullscreen, this.clickFullScreen, this.clickClose)['tabtable']}
          </div>
        )
      },
    ]
    return gridItems.filter(item => !closeList.includes(item.key)).map(item => item.content)
  }

  render(){
    const { isFullscreen, fullscreenCard } = this.state
    if (!isFullscreen) {
      return (
        <ResponsiveGridLayout
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 12, sm: 6, xs: 4, xxs: 2}}
          layouts={this.state.layouts}
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