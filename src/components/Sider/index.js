/*
 * @Author: XueYu 😊
 * @Date: 2019-01-11 13:40:28
 * @Last Modified by: XueYu 😊
 * @Last Modified time: 2019-01-11 16:58:37
 */
import React from 'react'
import { Collapse } from 'antd'
import styles from './index.less'

const Panel = Collapse.Panel;

const text = (
  <p style={{ paddingLeft: 24 }}>
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  </p>
);
const customCollapseStyle = {
  background: 'transparent',
  color: '#fff',
  fontWeight: 'bolder'
}
const customPanelStyle = {
  color: '#fff',
  background: 'transparent',
  border: 0,
  overflow: 'hidden',
}


const Sider = () => {
  return (
    <div id={styles.sider} className='flex-col'>
      <Collapse bordered={false} defaultActiveKey={['1']} style={customCollapseStyle}>
        <Panel header={
          <div className={`${styles.panelHeader} f-16 c-fff user-select`}>提交委托</div>
        } key="1" style={customPanelStyle}>
          {text}
        </Panel>
        <Panel header={
          <div className={`${styles.panelHeader} f-16 c-fff user-select`}>持有仓位：XBTUSD</div>
        } key="2" style={customPanelStyle}>
          {text}
        </Panel>
        <Panel header={
          <div className={`${styles.panelHeader} f-16 c-fff user-select`}>合约明细：XBTUSD</div>
        } key="3" style={customPanelStyle}>
          {text}
        </Panel>
      </Collapse>
    </div>
  )
}

export default Sider