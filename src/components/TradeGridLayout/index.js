/*
 * @Author: XueYu 😊
 * @Date: 2019-01-14 17:41:19
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-24 17:36:42
 */
import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Responsive, WidthProvider } from 'react-grid-layout';
import Card from '../Card'
import Order from './Order'
import RecentTrade from './RecentTrade'
import DepthChart from '../DepthChart'
import BasicOrdersAndPositions from './BasicOrdersAndPositions'
import TradingView from './TradingView'
import MarginDisplay from './MarginDisplay'

const ResponsiveGridLayout = WidthProvider(Responsive);

/* 仓位标签配置 */
const tabList = [
  {key: 'positions', tab: '仓位'},
  {key: 'close', tab: '已平仓位'},
  {key: 'active', tab: '活动委托'},
  {key: 'stops', tab: '止损委托'},
  {key: 'fills', tab: '已成交'},
  {key: 'order', tab: '委托历史'},
]

@connect(({ trade: { layouts, closedCards, currentBreakpoint } }) => ({
  layouts, closedCards, currentBreakpoint
}))
class TradeGridLayout extends PureComponent {
  state = {
    isFullscreen: false,
    fullscreenCard: '',
    activeTabKey: 'positions',
    mounted: false,
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
    marginDisplay: {
      key: 'marginDisplay',
      title: '保证金',
      extra: ['close'],
      children: <MarginDisplay />
    },
  }
  /* 渲染卡片 */
  renderCardList = (key) => {
    const { isFullscreen } = this.state
    const {children, ...props} = this.CARD_LIST_CONFIG[key]
    return (
      <Card {...props} isFullscreen={isFullscreen}
        clickFullScreen={() => this.clickFullScreen(key)}
        clickClose={() => this.clickClose(key)}>
        {children}
      </Card>
    )
  }
  /* 布局变化回调 */
  onLayoutChange = (layout, layouts) => {
    this.props.dispatch({ type: 'trade/layoutChange', payload: { layouts } })
  }
  /* 点击全屏 */
  clickFullScreen = key => {
    const { isFullscreen } = this.state
    this.setState({
      isFullscreen: !isFullscreen,
      fullscreenCard: key
    })
  }
  /* 点击关闭 */
  clickClose = key => {
    this.props.dispatch({
      type: 'trade/closeCard',
      payload: { key }
    })
  }
  /* 仓位标签切换 */
  onTabChange = key => {
    this.setState({ activeTabKey: key })
  }
  /* 响应式布局变化 */
  onBreakpointChange = breakpoint => {
    this.props.dispatch({
      type: 'trade/breakpointChange',
      payload: {breakpoint}
    })
  }
  componentDidMount() {
    this.setState({ mounted: true });
  }
  render(){
    const { isFullscreen, fullscreenCard } = this.state
    const { layouts, currentBreakpoint } = this.props
    if (!isFullscreen) {
      return (
        <ResponsiveGridLayout
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 12, sm: 12, xs: 12, xxs: 2}}
          layouts={layouts}
          draggableCancel='.noDrag'
          // measureBeforeMount={true}
          onBreakpointChange={this.onBreakpointChange}
          // useCSSTransforms={false}
          // containerPadding={[10,0]}
          measureBeforeMount={false}
          useCSSTransforms={this.state.mounted}
          onLayoutChange={(layout, layouts) => this.onLayoutChange(layout, layouts)}>
          {
            layouts[currentBreakpoint].map(item => <div key={item.i}>{this.renderCardList(item.i)}</div>)
          }
        </ResponsiveGridLayout>
      )
    } else if (isFullscreen) {
      return (this.renderCardList(fullscreenCard))
    }
  }
}

export default TradeGridLayout