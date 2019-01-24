/*
 * @Author: XueYu 😊
 * @Date: 2019-01-24 16:59:34
 * @Last Modified by:   XueYu 😊
 * @Last Modified time: 2019-01-24 16:59:34
 */
import React, { PureComponent } from 'react'
import { Checkbox } from 'antd'
import { connect } from 'dva'
import { BASIC_TOOL } from '../../common/layout'

@connect(({ trade: {layouts, currentBreakpoint, closedCards} }) => ({
  layouts, currentBreakpoint, closedCards
}))
class ToolSelectBar extends PureComponent {
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
    return (
      <div>
        {
          BASIC_TOOL.map(item => (
            <Checkbox
              onChange={(e, key) => this.onChange(e,item.key)}
              key={item.key}
              checked={this.isChecked(item.key)}>{item.name} {this.props.currentBreakpoint}</Checkbox>
          ))
        }
      </div>
    )
  }
}

export default ToolSelectBar