/*
 * @Author: XueYu 😊
 * @Date: 2019-01-15 11:03:08
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-18 15:00:28
 */
import React, { PureComponent } from 'react'
import { Card, Icon, Popover, InputNumber, Tooltip, Radio, Checkbox } from 'antd'
import { connect } from 'dva'
import styles from './index.less'

const RadioGroup = Radio.Group

@connect(({trade: {tradeOrderDisplay}}) => ({tradeOrderDisplay}))
class SettingContent extends PureComponent {
  onRadioChange = e => {
    this.props.dispatch({
      type: 'trade/changeTradeOrderDisplay',
      payload: {tradeOrderDisplay: e.target.value}
    })
  }
  render(){
    return (
      <div className={styles.settingContent}>
        <Tooltip title='将委托根据价格区间组合，更清楚地显示深度。'>
          <span className={`${styles.settingContentTitle} f-bolder`}>合并</span>
        </Tooltip>
        <div style={{margin: '5px 0 10px 0'}}><InputNumber min={0.5} max={5000} defaultValue={0.5}/></div>
        <Tooltip title='转换委托列表样式'>
          <span className={`${styles.settingContentTitle} f-bolder`}>列</span>
        </Tooltip>
        <div>
          <RadioGroup defaultValue='single' value={this.props.tradeOrderDisplay} onChange={this.onRadioChange}>
            <Radio value='single'>单列</Radio>
            <Radio value='double'>双列</Radio>
          </RadioGroup>
        </div>
        <br/>
        <Checkbox>
          <Tooltip title='当强平委托进入列表是显示警报'>
            <span className={`${styles.settingContentTitle} f-bolder`}>强平警报</span>
          </Tooltip>
        </Checkbox>
      </div>
    )
  }
}
const setting = (
  <Popover placement="bottomRight" key='settingPop' title={'委托列表选项'} arrowPointAtCenter content={<SettingContent/>} trigger="click">
    <Icon type="setting" key='setting' className={`${styles.cardWiget} cursor-p`}/>
  </Popover>
)
const fullscreen = (handleClick, isFullscreen) => (
  <Icon
    key='fullscreen'
    type={isFullscreen?'fullscreen-exit':'fullscreen'}
    onClick={handleClick}
    className={`${styles.cardWiget} cursor-p`}/>
)
const close = (clickClose) => (
  <Icon type="close" key='close' onClick={clickClose} className={`${styles.cardWiget} cursor-p`}/>
)

const WIGETS = { setting, fullscreen, close }

/* 操作图标 */
function renderExtraWigets (extra, clickFullScreen, isFullscreen, clickClose) {
  let extraWigets = []
  if (extra) {
    let extraOpts = []
    // 输入值判断
    if (typeof extra === 'string') {
      extraOpts.push(extra)
    } else if (Array.isArray(extra)) {
      extraOpts = Array.from(extra)
    } else {
      throw(new Error('不是合法的值'))
    }
    // 选择图标
    Object.entries(WIGETS).forEach(([key, value]) => {
      if (extraOpts.includes(key)) {
        if (key === 'fullscreen') {
          extraWigets.push(value(clickFullScreen, isFullscreen))
        } else if(key === 'close'){
          extraWigets.push(value(clickClose))
        } else {
          extraWigets.push(value)
        }
      }
    })
  }
  return extraWigets
}

const CardWraper = ({ children, extra, isFullscreen, clickFullScreen=()=>{}, clickClose=()=>{}, ...extraProps }) => {
  const extraWigets = renderExtraWigets(extra, clickFullScreen, isFullscreen, clickClose)

  return (
    <Card extra={extraWigets} {...extraProps}>
      <div className={`${styles.cardBodyWrapper} noDrag`}>
        {children}
      </div>
    </Card>
  )
}

export default CardWraper