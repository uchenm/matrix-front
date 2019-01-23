/*
 * @Author: XueYu 😊
 * @Date: 2019-01-11 18:09:12
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-23 21:02:39
 */
import React, {PureComponent} from 'react'
import { Tabs, Popover, Icon, Checkbox } from 'antd'
import { connect } from 'dva'
import { BASIC_TOOL } from '../../common/layout'
import Head from './Head'
import Content from './Content'
import styles from './index.less'

const TabPane = Tabs.TabPane;
const CheckboxGroup = Checkbox.Group;

const OPTIONS = [
  { value: 'orderBook', label: '委托列表' },
  { value: 'tradingView', label: '价格图表' },
  { value: 'depthChart', label: '深度图' },
  { value: 'recentTradeList', label: '近期交易' },
  { value: 'basicOrdersAndPositions', label: '仓位和未结委托' },
]

function callback(key) {
  // console.log(key);
}
const tabBarStyle = {
  background: '#eee',
  margin: '0',
}

@connect(({ trade: {layouts, currentBreakpoint, closedCards} }) => ({
  layouts, currentBreakpoint, closedCards
}))
class ToolBar extends PureComponent {
  getValue = _ => {
    const { closedCards, currentBreakpoint, layouts } = this.props
    const closedItems = closedCards[currentBreakpoint].map(item => item.i)
    const allItems = layouts[currentBreakpoint].map(item => item.i)
    return allItems.filter(item => !closedItems.includes(item))
  }
  onChange = (e, key) => {
    const state = e.target.checked
    if (!state) {
      this.props.dispatch({ type: 'trade/closeCard', payload: {key} })
    } else {
      this.props.dispatch({ type: 'trade/openCard', payload: {key} })
    }
  }
  isChecked = key => {
    const { closedCards, currentBreakpoint } = this.props
    const closedItems = closedCards[currentBreakpoint].map(item => item.i)
    return !closedItems.includes(key)
  }

  render(){
    // const { layouts, currentBreakpoint } = this.props
    const defaultValue = ['orderBook', 'tradingView', 'depthChart', 'recentTradeList', 'basicOrdersAndPositions']
    return (
      <div>
        {
          BASIC_TOOL.map(item => (
            <Checkbox
              onChange={(e, key) => this.onChange(e,item.key)}
              key={item.key}
              checked={this.isChecked(item.key)}>{item.name}</Checkbox>
          ))
        }
      </div>
    )
  }
}

class InstrumentSelector extends PureComponent {
  state = {
    instrumentData: [
      {
        instrumentRootSymbol: 'XBT',
        instrumentDescription: '比特币',
        lastChangePcnt: '-3.96%',
        up: false,
      },
      {
        instrumentRootSymbol: 'ADA',
        instrumentDescription: '卡尔达诺',
        lastChangePcnt: '-3.31%',
        up: false,
      },
      {
        instrumentRootSymbol: 'BCH',
        instrumentDescription: '比特币现金',
        lastChangePcnt: '-1.96%',
        up: false,
      },
      {
        instrumentRootSymbol: 'EOS',
        instrumentDescription: 'EOS 代币',
        lastChangePcnt: '-3.38%',
        up: false,
      },
      {
        instrumentRootSymbol: 'ETH',
        instrumentDescription: '以太币',
        lastChangePcnt: '-6.13%',
        up: false,
      },
      {
        instrumentRootSymbol: 'LTC',
        instrumentDescription: '莱特币',
        lastChangePcnt: '-0.90%',
        up: false,
      },
      {
        instrumentRootSymbol: 'TRX',
        instrumentDescription: '波场币',
        lastChangePcnt: '+0.97%',
        up: true,
      },
      {
        instrumentRootSymbol: 'XRP',
        instrumentDescription: '瑞波币',
        lastChangePcnt: '-0.36%',
        up: false,
      },
    ],
  }
  render(){
    return (
      <div className={`${styles.instrumentSelector} tradeTopTabs`}>
        <Tabs onChange={callback} type='card' tabBarStyle={tabBarStyle} tabPosition='top'>
          {
            this.state.instrumentData.map(item => (
              <TabPane tab={
                <Head {...item}/>
              } key={item.instrumentRootSymbol}>
                <Content {...item}/>
              </TabPane>
            ))
          }
        </Tabs>
        <div className={styles.toolBar}>
          <Popover content={<ToolBar/>} trigger='click' placement='bottomRight'>
            <div>
              定制
              <Icon type="caret-down" />
            </div>
          </Popover>
        </div>
      </div>
    )
  }
}

export default InstrumentSelector